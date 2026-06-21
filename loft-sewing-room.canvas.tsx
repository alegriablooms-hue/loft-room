import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H2,
  H3,
  Link,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

const ROOM_W_IN = 101;
const ROOM_L_IN = 133;

function FloorPlan() {
  const theme = useHostTheme();
  const pad = 30;
  const s = 1.45;
  const w = ROOM_W_IN * s;
  const l = ROOM_L_IN * s;
  const svgW = w + pad * 2;
  const svgH = l + pad * 2;
  const inX = (n: number) => pad + n * s;
  const inY = (n: number) => pad + n * s;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${svgW} ${svgH}`}
      style={{ maxWidth: svgW, display: "block" }}
      role="img"
      aria-label="Top-down floor plan of a 101 by 133 inch room"
    >
      <rect x={pad} y={pad} width={w} height={l} fill={theme.bg.elevated} stroke={theme.stroke.primary} strokeWidth={2} />

      {/* Twin XL loft, horizontal along top wall */}
      <rect x={inX(3)} y={inY(1)} width={80 * s} height={34 * s} fill="#e9d4bd" stroke="#a9703f" strokeWidth={1.5} rx={3} />
      <text x={inX(43)} y={inY(15)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(43)} dy={-4}>Twin XL loft</tspan>
        <tspan x={inX(43)} dy={12}>ladder →</tspan>
      </text>

      {/* IDÅSEN on left wall under loft */}
      <rect x={inX(1)} y={inY(2)} width={12 * s} height={26 * s} fill="#3f5d44" stroke="#2c4231" strokeWidth={1.5} rx={2} />
      <text x={inX(7)} y={inY(16)} fill="#ffffff" fontSize={7.5} textAnchor="middle" transform={`rotate(-90 ${inX(7)} ${inY(16)})`}>IDÅSEN</text>

      {/* HEMNES on back wall under loft, perpendicular */}
      <rect x={inX(14)} y={inY(1)} width={48 * s} height={11 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={2} />
      <text x={inX(38)} y={inY(8)} fill={theme.text.primary} fontSize={8} textAnchor="middle">HEMNES</text>

      {/* KALLAX/LINNMON workstation on left wall */}
      <rect x={inX(1)} y={inY(38)} width={12 * s} height={40 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={2} />
      <rect x={inX(13)} y={inY(52)} width={25 * s} height={10 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={2} />
      <text x={inX(7)} y={inY(58)} fill={theme.text.primary} fontSize={7} textAnchor="middle" transform={`rotate(-90 ${inX(7)} ${inY(58)})`}>K/L ws</text>

      {/* NORDEN on right wall, leaf dashed west */}
      <rect x={inX(80)} y={inY(46)} width={8 * s} height={29 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={2} />
      <rect x={inX(53)} y={inY(49)} width={27 * s} height={20 * s} fill={theme.fill.primary} stroke={theme.stroke.tertiary} strokeWidth={1.5} strokeDasharray="5 4" rx={2} />
      <text x={inX(84)} y={inY(62)} fill={theme.text.primary} fontSize={8} textAnchor="middle" transform={`rotate(90 ${inX(84)} ${inY(62)})`}>NORDEN</text>

      {/* BRYTNING desk on bottom wall, left end */}
      <rect x={inX(5)} y={inY(120)} width={33 * s} height={10 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={2} />
      <text x={inX(21)} y={inY(126)} fill={theme.text.primary} fontSize={8} textAnchor="middle">BRYTNING</text>

      {/* Entry door, bottom wall right */}
      <line x1={inX(68)} y1={pad + l} x2={inX(97)} y2={pad + l} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={inX(82)} y={pad + l + 16} fill={theme.text.secondary} fontSize={10} textAnchor="middle">door 29"</text>

      {/* Closet door, right wall top */}
      <line x1={pad + w} y1={inY(4)} x2={pad + w} y2={inY(30)} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={pad + w + 14} y={inY(17)} fill={theme.text.secondary} fontSize={10} textAnchor="middle" transform={`rotate(90 ${pad + w + 14} ${inY(17)})`}>closet 26"</text>

      {/* Door, right wall bottom */}
      <line x1={pad + w} y1={inY(101)} x2={pad + w} y2={inY(129)} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={pad + w + 14} y={inY(115)} fill={theme.text.secondary} fontSize={10} textAnchor="middle" transform={`rotate(90 ${pad + w + 14} ${inY(115)})`}>door 28"</text>

      {/* Door, left wall */}
      <line x1={pad} y1={inY(72)} x2={pad} y2={inY(106)} stroke={theme.text.tertiary} strokeWidth={5} />

      <text x={pad + w / 2} y={pad - 12} fill={theme.text.tertiary} fontSize={11} textAnchor="middle">101" wide</text>
    </svg>
  );
}

export default function LoftSewingRoom() {
  const L = {
    loft: "https://www.wayfair.com/baby-kids/pdp/ebern-designs-olympic-twin-xl-loft-bed-with-ladder-w118110324.html",
    workstation: "https://www.ikea.com/us/en/p/kallax-linnmon-workstation-white-s29481701/",
    brytning: "https://www.ikea.com/us/en/p/brytning-desk-white-20598531/",
    norden: "https://www.ikea.com/us/en/p/norden-gateleg-table-white-10423886/",
    idasen: "https://www.ikea.com/us/en/p/idasen-cabinet-with-doors-and-drawers-dark-green-90496398/",
    hemnes: "https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-white-stain-10576191/",
  };

  const fitRows = [
    ["Twin XL loft (72¾\" tall)", "92½ × 41\"", "Fits back wall; ~28¾\" above, ~55\" below"],
    ["IDÅSEN + HEMNES (under loft)", "~31\" each", "Perpendicular L in top-left corner"],
    ["KALLAX/LINNMON workstation", "~47 × 24\"", "Left wall; desk extends into room"],
    ["NORDEN gateleg table", "~10–60\" W", "Right wall, across from workstation"],
    ["BRYTNING desk", "~47 × 23\"", "Bottom wall, left end, flush to wall"],
  ];
  const fitTone: Array<"success" | "danger" | undefined> = ["success", "success", "success", "success", "success"];

  const loftRows = [
    ["Wayfair", <Link href={L.loft}>Ebern "Olympic" Twin XL loft + ladder</Link>, "Pecan-wood loft on the back wall — ladder at right end", "~$930"],
  ];
  const workRows = [
    ["IKEA", <Link href={L.workstation}>KALLAX / LINNMON workstation (white)</Link>, "Left wall — attached Kallax + Linnmon desk extending into room", "~$160"],
    ["IKEA", <Link href={L.brytning}>BRYTNING desk (white)</Link>, "Bottom wall, left end — office desk flush to wall", "~$180"],
    ["IKEA", <Link href={L.norden}>NORDEN gateleg table (white)</Link>, "Right wall — craft/sewing table across from workstation", "~$229"],
  ];
  const storeRows = [
    ["IKEA", <Link href={L.idasen}>IDÅSEN cabinet, doors + drawers (dark green)</Link>, "Left wall under loft — bold accent, perpendicular to HEMNES", "~$329"],
    ["IKEA", <Link href={L.hemnes}>HEMNES 8-drawer dresser (white stain)</Link>, "Back wall under loft — clothes + linens", "~$429"],
  ];

  return (
    <Stack gap={20} style={{ padding: 24, maxWidth: 940 }}>
      <Stack gap={8}>
        <Row align="center" gap={10}>
          <H2 style={{ margin: 0 }}>Loft + Sewing + Office Room — Design Brief</H2>
          <Pill size="sm">101" × 133" × 101.5"</Pill>
        </Row>
        <Text tone="secondary">
          A compact 8'5" × 11'1" room with an 8'5½" ceiling, arranged per the
          supplied schematic: pecan Twin XL loft on the back wall; IDÅSEN and
          HEMNES in a perpendicular L under the loft; KALLAX/LINNMON workstation
          on the left wall; NORDEN on the right wall across from it; BRYTNING desk
          flush on the bottom wall.
        </Text>
        <Row gap={8} wrap>
          <Pill size="sm">1 · Loft sleeping platform</Pill>
          <Pill size="sm">2 · Craft / sewing + office</Pill>
          <Pill size="sm">3 · Storage under loft</Pill>
        </Row>
      </Stack>

      <Callout tone="success" title="The chosen loft fits the ceiling with room to spare">
        The Ebern Designs "Olympic" Twin XL loft is 72¾" tall (92½" L × 41" W).
        Under the 101.5" (8'5½") ceiling that leaves ~28¾" of clearance above the
        guardrail and ~55" of open headroom underneath — enough for the IDÅSEN
        cabinet and HEMNES dresser in an L under the platform.
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat value={'101"'} label="Width (8'5)" />
        <Stat value={'133"'} label="Length (11'1)" />
        <Stat value={'101.5"'} label="Ceiling" tone="success" />
        <Stat value={'72¾"'} label="Loft height" tone="info" />
      </Grid>

      <Grid columns="1fr 1fr" gap={20} align="start">
        <Stack gap={8}>
          <H3 style={{ margin: 0 }}>Top-down layout</H3>
          <FloorPlan />
          <Text size="small" tone="tertiary">
            Schematic layout: loft on back wall; IDÅSEN + HEMNES perpendicular
            under loft; KALLAX/LINNMON on left wall; NORDEN on right wall;
            BRYTNING on bottom wall at left end.
          </Text>
        </Stack>

        <Stack gap={12}>
          <H3 style={{ margin: 0 }}>Fit & clearance check</H3>
          <Table
            headers={["Piece", "Footprint", "Verdict @ 101×133"]}
            rows={fitRows}
            rowTone={fitTone}
            columnAlign={["left", "right", "left"]}
          />
          <Text size="small" tone="tertiary">
            Sources: Wayfair & IKEA product specs, checked 2026.
          </Text>
        </Stack>
      </Grid>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Sleep — the loft</H3>
        <Table
          headers={["Retailer", "Product", "Role in the room", "Approx."]}
          rows={loftRows}
          columnAlign={["left", "left", "left", "right"]}
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Work surfaces — craft / sewing + office</H3>
        <Table
          headers={["Retailer", "Product", "Role in the room", "Approx."]}
          rows={workRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Storage</H3>
        <Table
          headers={["Retailer", "Product", "Role in the room", "Approx."]}
          rows={storeRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Grid columns="1fr 1fr" gap={16} align="start">
        <Card>
          <CardHeader>How the pieces fit</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text><Text weight="semibold">Back wall:</Text> pecan Twin XL loft horizontal with ladder at the right end.</Text>
              <Divider />
              <Text><Text weight="semibold">Under loft (L-corner):</Text> IDÅSEN on left wall + HEMNES on back wall, perpendicular.</Text>
              <Divider />
              <Text><Text weight="semibold">Left wall:</Text> KALLAX/LINNMON workstation with desk extending into the room.</Text>
              <Divider />
              <Text><Text weight="semibold">Right wall:</Text> NORDEN gateleg table across from the workstation.</Text>
              <Divider />
              <Text><Text weight="semibold">Bottom wall:</Text> BRYTNING desk flush at the left end.</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Watch-outs</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>• The Twin XL loft is 92½" long — confirm the run plus ladder clears the back wall and top-right closet.</Text>
              <Text>• IDÅSEN is the one dark accent; keep textiles neutral against white + pecan.</Text>
              <Text>• Leave swing clearance for entry and right-wall doors; fold NORDEN leaves to reclaim the walkway.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Text size="small" tone="tertiary" italic>
        Renders are artistic visualizations of the supplied schematic. Each link
        opens the exact item supplied (Ebern loft on Wayfair; the rest on IKEA).
        Prices are rough 2026 estimates.
      </Text>
    </Stack>
  );
}
