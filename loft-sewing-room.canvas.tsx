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

      {/* Loft + cube/cart storage against the solid TOP wall */}
      <rect x={inX(3)} y={inY(1)} width={80 * s} height={40 * s} fill={theme.fill.tertiary} stroke={theme.accent.primary} strokeWidth={1.5} rx={3} />
      <text x={inX(43)} y={inY(21)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(43)} dy={-6}>Loft above</tspan>
        <tspan x={inX(43)} dy={12}>cube + cart below</tspan>
      </text>

      {/* Office desk on LEFT wall, under the 60in window */}
      <rect x={inX(1)} y={inY(75)} width={23 * s} height={53 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(13)} y={inY(101)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(13)} dy={-6}>Office</tspan>
        <tspan x={inX(13)} dy={12}>desk</tspan>
      </text>

      {/* Sewing station on RIGHT wall middle */}
      <rect x={inX(76)} y={inY(46)} width={23 * s} height={54 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(87.5)} y={inY(73)} fill={theme.text.primary} fontSize={9.5} textAnchor="middle">
        <tspan x={inX(87.5)} dy={-6}>Sewing</tspan>
        <tspan x={inX(87.5)} dy={12}>station</tspan>
      </text>

      {/* Rug */}
      <rect x={inX(28)} y={inY(60)} width={50 * s} height={52 * s} fill={theme.fill.primary} stroke={theme.stroke.tertiary} strokeWidth={1.5} strokeDasharray="5 4" rx={3} />
      <text x={inX(53)} y={inY(86)} fill={theme.text.tertiary} fontSize={10} textAnchor="middle">rug</text>

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
    vitval: "https://www.ikea.com/us/en/p/vitval-loft-bed-frame-white-light-gray-50428930/",
    wayfairLoft: "https://www.wayfair.com/keyword.php?keyword=twin%20loft%20bed%20open%20underneath",
    targetLoft: "https://www.target.com/s?searchTerm=twin+loft+bed+open",
    stora: "https://www.ikea.com/us/en/p/stora-loft-bed-frame-black-80160867/",
    lagkaptenDesk: "https://www.ikea.com/us/en/p/lagkapten-adils-desk-white-anthracite-s49417274/",
    micke: "https://www.ikea.com/us/en/p/micke-desk-white-30244875/",
    targetDesk: "https://www.target.com/s?searchTerm=writing+desk+47+inch+wood",
    wayfairDesk: "https://www.wayfair.com/keyword.php?keyword=48%20inch%20writing%20desk%20wood",
    alex: "https://www.ikea.com/us/en/search/?q=alex%20drawer%20unit",
    lagkapten: "https://www.ikea.com/us/en/search/?q=lagkapten",
    skadis: "https://www.ikea.com/us/en/search/?q=skadis",
    kallax: "https://www.ikea.com/us/en/search/?q=kallax",
    cart: "https://www.target.com/s?searchTerm=brightroom%203%20tier%20utility%20cart",
    craftTable: "https://www.wayfair.com/keyword.php?keyword=adjustable%20height%20craft%20table",
    cube: "https://www.target.com/s?searchTerm=brightroom%20cube%20organizer",
    chair: "https://www.wayfair.com/keyword.php?keyword=ergonomic%20mesh%20task%20chair%20white",
    lamp: "https://www.target.com/s?searchTerm=task%20lamp",
  };

  const fitRows = [
    [<Link href={L.vitval}>VITVAL twin loft frame (open base)</Link>, "IKEA", "~64⅝\"", "Fits — feature pick"],
    [<Link href={L.wayfairLoft}>Twin open-frame loft</Link>, "Wayfair", "~65–69\"", "Fits — clear underside"],
    [<Link href={L.targetLoft}>Twin wood loft (open base)</Link>, "Target", "~65–70\"", "Fits"],
    [<Link href={L.stora}>STORÅ full, solid pine</Link>, "IKEA", "84¼\"", "Needs 106\" — ~4½\" short"],
  ];
  const fitTone: Array<"success" | "danger" | undefined> = ["success", "success", "success", "danger"];

  const loftRows = [
    ["IKEA", <Link href={L.vitval}>VITVAL loft bed frame (twin)</Link>, "Clean, light high loft — open base keeps the footprint clear for cubes + cart", "~$229"],
    ["Wayfair", <Link href={L.wayfairLoft}>Twin loft bed, open frame</Link>, "Birch/white open lofts ~65–69\" with a clear underside", "~$250–450"],
    ["Target", <Link href={L.targetLoft}>Twin wood loft bed (open base)</Link>, "Budget open loft so KALLAX cubes slide underneath", "~$250–500"],
  ];
  const deskRows = [
    ["IKEA", <Link href={L.lagkaptenDesk}>LAGKAPTEN / ADILS desk (47×24)</Link>, "Simple light top that fits beneath the window for daylight", "~$70–90"],
    ["IKEA", <Link href={L.micke}>MICKE desk (with cable mgmt)</Link>, "Compact desk with a drawer for built-in storage", "~$129"],
    ["Target", <Link href={L.targetDesk}>47\" writing desk (wood/white)</Link>, "Matching light-wood alternative for the office zone", "~$120–180"],
    ["Wayfair", <Link href={L.wayfairDesk}>48\" writing desk</Link>, "Birch-top options sized to sit under the window", "~$120–220"],
  ];
  const sewRows = [
    ["IKEA", <Text as="span">2× <Link href={L.alex}>ALEX drawers</Link> + <Link href={L.lagkapten}>LAGKAPTEN</Link> top</Text>, "A ~47\" top fits the 71\" solid right-wall run; notion drawers below", "~$200–300"],
    ["IKEA", <Link href={L.skadis}>SKÅDIS pegboard + hooks</Link>, "Scissors, thread, rulers above the bench", "~$30+"],
    ["Target", <Link href={L.cart}>Brightroom 3-tier utility cart</Link>, "Mobile catch-all for active projects", "~$40"],
    ["Wayfair", <Link href={L.craftTable}>Adjustable craft/sewing table (optional)</Link>, "Dedicated height/tilt table vs. ALEX combo", "~$120–200"],
  ];
  const finishRows = [
    ["IKEA", <Link href={L.kallax}>KALLAX 2×2 / 2×4 + fabric bins</Link>, "Slides under the loft for folded fabric, bins, books", "~$70–110"],
    ["Target", <Link href={L.cube}>Brightroom cube organizer + drawers</Link>, "Alt cube storage in white/wood for under the loft", "~$50–90"],
    ["Wayfair", <Link href={L.chair}>Ergonomic task chair (white/mesh)</Link>, "Shared by office desk and sewing bench", "~$90–160"],
    ["Target", <Link href={L.lamp}>Task lamp</Link>, "Sewing light + anchors the floor", "~$60–120"],
  ];

  return (
    <Stack gap={20} style={{ padding: 24, maxWidth: 940 }}>
      <Stack gap={8}>
        <Row align="center" gap={10}>
          <H2 style={{ margin: 0 }}>Loft + Sewing + Office Room — Design Brief</H2>
          <Pill size="sm">101" × 133" × 101.5"</Pill>
        </Row>
        <Text tone="secondary">
          A compact 8'5" × 11'1" room with an 8'5½" ceiling doing triple duty:
          a lofted bed with cube storage beneath it, an office desk under the
          60" window, and a sewing station along the right wall.
        </Text>
        <Row gap={8} wrap>
          <Pill size="sm">1 · Loft sleeping platform</Pill>
          <Pill size="sm">2 · Sewing station</Pill>
          <Pill size="sm">3 · Office desk</Pill>
        </Row>
      </Stack>

      <Callout tone="success" title="The ceiling now works for a real loft">
        At 101.5" (8'5½"), a standing loft is viable — IKEA's open VITVAL loft
        (~64⅝") fits easily, and most twin open-frame lofts run ~65–69" tall,
        leaving a clear ~54" of headroom below for the cube storage and cart.
        Only IKEA's tall STORÅ (needs 106") still misses, by ~4½".
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat value={'101"'} label="Width (8'5)" />
        <Stat value={'133"'} label="Length (11'1)" />
        <Stat value={'101.5"'} label="Ceiling" tone="success" />
        <Stat value={'60"'} label="Window (left wall)" tone="info" />
      </Grid>

      <Grid columns="1fr 1fr" gap={20} align="start">
        <Stack gap={8}>
          <H3 style={{ margin: 0 }}>Top-down layout</H3>
          <FloorPlan />
          <Text size="small" tone="tertiary">
            Schematic, not to scale. The loft sits against the only solid wall
            (top) with cube storage + cart beneath it; the office desk goes
            under the 60" left window; the sewing station runs along the right
            wall between the closet and the 28" door; the 50" window and 29"
            entry stay clear on the bottom wall.
          </Text>
        </Stack>

        <Stack gap={12}>
          <H3 style={{ margin: 0 }}>Loft fit check @ 101.5" ceiling</H3>
          <Table
            headers={["Option", "Source", "Height", "Verdict"]}
            rows={fitRows}
            rowTone={fitTone}
            columnAlign={["left", "left", "right", "left"]}
          />
          <Text size="small" tone="tertiary">
            Sources: Wayfair, Target, IKEA product specs, checked 2026.
          </Text>
        </Stack>
      </Grid>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>The loft — sleeping platform, open underneath</H3>
        <Table
          headers={["Retailer", "Product", "Why", "Approx."]}
          rows={loftRows}
          columnAlign={["left", "left", "left", "right"]}
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Office desk — under the 60" window</H3>
        <Table
          headers={["Retailer", "Product", "Why", "Approx."]}
          rows={deskRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Sewing station — right wall</H3>
        <Table
          headers={["Retailer", "Product", "Why", "Approx."]}
          rows={sewRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Storage, seating & finishing</H3>
        <Table
          headers={["Retailer", "Product", "Why", "Approx."]}
          rows={finishRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Grid columns="1fr 1fr" gap={16} align="start">
        <Card>
          <CardHeader>How the three zones fit</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text><Text weight="semibold">Back/top wall (solid):</Text> loft up top with cube storage + cart below, ladder at the left end — the only wall with no window or door.</Text>
              <Divider />
              <Text><Text weight="semibold">Left wall (60" window):</Text> office desk for daylight, task chair and lamp.</Text>
              <Divider />
              <Text><Text weight="semibold">Right wall:</Text> sewing bench in the solid middle (between the 26" closet and 28" door), pegboard above, ALEX drawers below.</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Watch-outs</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>• 2 windows (60" left, 50" bottom) + 3 doors (26" closet & 28" on the right, 29" entry on the bottom) — the top wall is the only solid run.</Text>
              <Text>• Keep the office desk at sill height under the 60" window so daylight isn't blocked; leave swing clearance for all three doors.</Text>
              <Text>• Pick a loft that's open underneath (no built-in desk) so the cubes + cart slide under it; confirm the ~42" × 80" twin footprint fits the 101" top wall and clears the closet.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Text size="small" tone="tertiary" italic>
        The render is an artistic visualization — dimensions are approximated and
        furniture resembles, but is not an exact copy of, the listed pieces.
        Prices are rough 2026 estimates; verify on each retailer's site.
      </Text>
    </Stack>
  );
}
