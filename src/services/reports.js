import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType } from 'docx';
import { saveAs } from 'file-saver';
import { calculateSummaryMetrics } from '../utils/calculations';
import { formatDate, formatCurrency } from '../utils/formatters';

export async function generateDocxReport({ startDate, endDate, currency = '$', records = [], cycles = [] }) {
  const summary = calculateSummaryMetrics(records, cycles);

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "Fuel Meter Report",
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Reporting Period: ", bold: true }),
              new TextRun({ text: `${formatDate(startDate)} to ${formatDate(endDate)}` }),
            ],
            spacing: { after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Generated on: ", bold: true }),
              new TextRun({ text: new Date().toLocaleString() }),
            ],
            spacing: { after: 300 },
          }),

          new Paragraph({
            text: "Key Performance Indicators (KPIs)",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Total Distance", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: `${summary.totalDistanceKm} km` })] }),
                  new TableCell({ children: [new Paragraph({ text: "Total Fuel", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: `${summary.totalFuelLitres} L` })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Total Cost", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: formatCurrency(summary.totalCost, currency) })] }),
                  new TableCell({ children: [new Paragraph({ text: "Avg Consumption", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: `${summary.avgKmPerLitre} km/L` })] }),
                ],
              }),
            ],
          }),

          new Paragraph({
            text: "Fuel Event Log",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Date & Time", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: "Type", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: "Odometer", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: "Fuel (L)", bold: true })] }),
                  new TableCell({ children: [new Paragraph({ text: "Cost", bold: true })] }),
                ],
              }),
              ...records.map(
                (r) =>
                  new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph({ text: formatDate(r.eventDateTime) })] }),
                      new TableCell({ children: [new Paragraph({ text: r.eventType })] }),
                      new TableCell({ children: [new Paragraph({ text: `${r.odometerKm || 0} km` })] }),
                      new TableCell({ children: [new Paragraph({ text: r.fuelLitres ? `${r.fuelLitres} L` : '-' })] }),
                      new TableCell({ children: [new Paragraph({ text: r.totalFuelCost ? formatCurrency(r.totalFuelCost, currency) : '-' })] }),
                    ],
                  })
              ),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Fuel_Meter_Report_${startDate}_to_${endDate}.docx`);
}
