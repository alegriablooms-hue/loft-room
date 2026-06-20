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
  const s = 1.45; // px per inch
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

      {/* Twin XL loft (workstation below) against the solid TOP wall */}
      <rect x={inX(3)} y={inY(1)} width={80 * s} height={34 * s} fill="#e9d4bd" stroke="#a9703f" strokeWidth={1.5} rx={3} />
      <text x={inX(43)} y={inY(15)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(43)} dy={-4}>Twin XL loft</tspan>
        <tspan x={inX(43)} dy={12}>workstation below</tspan>
      </text>

      {/* KALLAX shelf on LEFT wall */}
      <rect x={inX(1)} y={inY(44)} width={16 * s} height={46 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(9)} y={inY(67)} fill={theme.text.primary} fontSize={9} textAnchor="middle">KALLAX</text>

      {/* NORDEN gateleg table on the rug (center) */}
      <rect x={inX(26)} y={inY(46)} width={48 * s} height={52 * s} fill={theme.fill.primary} stroke={theme.stroke.tertiary} strokeWidth={1.5} strokeDasharray="5 4" rx={3} />
      <rect x={inX(34)} y={inY(54)} width={30 * s} height={24 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(49)} y={inY(68)} fill={theme.text.primary} fontSize={9} textAnchor="middle">NORDEN</text>

      {/* BRYTNING desk on RIGHT wall (upper-mid) */}
      <rect x={inX(78)} y={inY(44)} width={21 * s} height={28 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(88.5)} y={inY(59)} fill={theme.text.primary} fontSize={9} textAnchor="middle">desk</text>

      {/* IDASEN cabinet (dark green) on RIGHT wall (lower-mid) */}
      <rect x={inX(80)} y={inY(80)} width={19 * s} height={30 * s} fill="#3f5d44" stroke="#2c4231" strokeWidth={1.5} rx={3} />
      <text x={inX(89.5)} y={inY(96)} fill="#ffffff" fontSize={8.5} textAnchor="middle">IDÅSEN</text>

      {/* HEMNES 8-drawer dresser on BOTTOM wall */}
      <rect x={inX(10)} y={inY(120)} width={50 * s} height={11 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(35)} y={inY(127)} fill={theme.text.primary} fontSize={9} textAnchor="middle">HEMNES dresser</text>

      {/* 60in window, LEFT wall (low) */}
      <line x1={pad} y1={inY(70)} x2={pad} y2={inY(130)} stroke={theme.accent.primary} strokeWidth={5} />
      <text x={pad - 14} y={inY(100)} fill={theme.accent.primary} fontSize={10} textAnchor="middle" transform={`rotate(-90 ${pad - 14} ${inY(100)})`}>60" window</text>

      {/* 50in window, BOTTOM wall */}
      <line x1={inX(4)} y1={pad + l} x2={inX(54)} y2={pad + l} stroke={theme.accent.primary} strokeWidth={5} />
      <text x={inX(29)} y={pad + l + 16} fill={theme.accent.primary} fontSize={10} textAnchor="middle">50" window</text>

      {/* 29in entry door, BOTTOM wall */}
      <line x1={inX(68)} y1={pad + l} x2={inX(97)} y2={pad + l} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={inX(82)} y={pad + l + 16} fill={theme.text.secondary} fontSize={10} textAnchor="middle">door 29"</text>

      {/* 26in closet door, RIGHT wall (top) */}
      <line x1={pad + w} y1={inY(4)} x2={pad + w} y2={inY(30)} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={pad + w + 14} y={inY(17)} fill={theme.text.secondary} fontSize={10} textAnchor="middle" transform={`rotate(90 ${pad + w + 14} ${inY(17)})`}>closet 26"</text>

      {/* 28in door, RIGHT wall (bottom) */}
      <line x1={pad + w} y1={inY(101)} x2={pad + w} y2={inY(129)} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={pad + w + 14} y={inY(115)} fill={theme.text.secondary} fontSize={10} textAnchor="middle" transform={`rotate(90 ${pad + w + 14} ${inY(115)})`}>door 28"</text>

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
    kallax: "https://www.ikea.com/us/en/p/kallax-shelf-unit-white-00275848/",
    hemnes: "https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-white-stain-10576191/",
  };

  const fitRows = [
    ["Twin XL loft (72¾\" tall)", "92½ × 41\"", "Fits top wall; ~28¾\" above, ~55\" below"],
    ["KALLAX/LINNMON workstation", "~47 × 24\"", "Stands under the loft"],
    ["KALLAX shelf + IDÅSEN cabinet", "~31 / 31\" W", "Line the left & right walls"],
    ["NORDEN gateleg table", "~10–60\" W", "Folds down — leaves the center open"],
  ];
  const fitTone: Array<"success" | "danger" | undefined> = ["success", "success", "success", "success"];

  const loftRows = [
    ["Wayfair", <Link href={L.loft}>Ebern "Olympic" Twin XL loft + ladder</Link>, "Pecan-wood loft on the back wall (92½×41\", 72¾\" tall) — open underneath", "~$930"],
  ];
  const workRows = [
    ["IKEA", <Link href={L.workstation}>KALLAX / LINNMON workstation (white)</Link>, "Tucks under the loft — cube storage + desk surface in one", "~$160"],
    ["IKEA", <Link href={L.brytning}>BRYTNING desk (white)</Link>, "Office desk on the right wall for a laptop + task chair", "~$180"],
    ["IKEA", <Link href={L.norden}>NORDEN gateleg table (white)</Link>, "Center craft / sewing table — drop-leaf, folds flat", "~$229"],
  ];
  const storeRows = [
    ["IKEA", <Link href={L.kallax}>KALLAX shelf unit (white)</Link>, "Tall cube shelving on the left wall — bins, books, plants", "~$110"],
    ["IKEA", <Link href={L.idasen}>IDÅSEN cabinet, doors + drawers (dark green)</Link>, "The single bold accent — closed storage, right wall", "~$329"],
    ["IKEA", <Link href={L.hemnes}>HEMNES 8-drawer dresser (white stain)</Link>, "Wide dresser on the bottom wall by the entry", "~$429"],
  ];

  return (
    <Stack gap={20} style={{ padding: 24, maxWidth: 940 }}>
      <Stack gap={8}>
        <Row align="center" gap={10}>
          <H2 style={{ margin: 0 }}>Loft + Sewing + Office Room — Design Brief</H2>
          <Pill size="sm">101" × 133" × 101.5"</Pill>
        </Row>
        <Text tone="secondary">
          A compact 8'5" × 11'1" room with an 8'5½" ceiling, shown in its
          completed state: a pecan-wood Twin XL loft on the back wall with a
          white workstation beneath it, a white KALLAX shelf on the left, a
          NORDEN drop-leaf craft/sewing table in the center, and a white desk
          with a dark-green IDÅSEN cabinet plus a HEMNES dresser for storage.
        </Text>
        <Row gap={8} wrap>
          <Pill size="sm">1 · Loft sleeping platform</Pill>
          <Pill size="sm">2 · Craft / sewing + office</Pill>
          <Pill size="sm">3 · Storage wall</Pill>
        </Row>
      </Stack>

      <Callout tone="success" title="The chosen loft fits the ceiling with room to spare">
        The Ebern Designs "Olympic" Twin XL loft is 72¾" tall (92½" L × 41" W).
        Under the 101.5" (8'5½") ceiling that leaves ~28¾" of clearance above the
        guardrail and ~55" of open headroom underneath — enough to stand the
        white KALLAX/LINNMON workstation directly beneath it.
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
            Schematic, not to scale, matching the supplied sketch. Twin XL loft
            on the top wall (workstation underneath); KALLAX shelf on the left;
            NORDEN table centered on the rug; white BRYTNING desk and the
            dark-green IDÅSEN cabinet on the right; HEMNES dresser on the bottom
            wall by the entry.
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
              <Text><Text weight="semibold">Back wall (solid):</Text> the pecan Twin XL loft + ladder, with the white KALLAX/LINNMON workstation standing underneath.</Text>
              <Divider />
              <Text><Text weight="semibold">Left wall:</Text> the tall white KALLAX shelf for bins, books and plants.</Text>
              <Divider />
              <Text><Text weight="semibold">Center:</Text> the white NORDEN gateleg table on the rug — open for sewing/crafts, folded flat to free the floor.</Text>
              <Divider />
              <Text><Text weight="semibold">Right & bottom walls:</Text> white BRYTNING desk + dark-green IDÅSEN cabinet, and the white HEMNES dresser by the entry.</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Watch-outs</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>• The Twin XL loft is 92½" long — confirm that run plus the ladder clears the back wall and the top-right closet before buying.</Text>
              <Text>• The IDÅSEN cabinet is the one dark accent; everything else is white + pecan wood, so keep extra textiles neutral to let it pop.</Text>
              <Text>• Leave swing clearance for the entry and right-wall door; the NORDEN table's drop leaves reclaim the walkway when folded.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Text size="small" tone="tertiary" italic>
        The renders are artistic visualizations of the supplied layout —
        dimensions are approximated and furniture resembles, but is not an exact
        copy of, the listed pieces. Each link opens the exact item supplied
        (Ebern loft on Wayfair; the rest on IKEA). Prices are rough 2026
        estimates; verify on each retailer's site.
      </Text>
    </Stack>
  );
}
