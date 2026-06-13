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

      {/* 60in window, left wall */}
      <line x1={pad} y1={inY(33)} x2={pad} y2={inY(93)} stroke={theme.accent.primary} strokeWidth={5} />
      <text x={pad - 14} y={inY(63)} fill={theme.text.secondary} fontSize={10} textAnchor="middle" transform={`rotate(-90 ${pad - 14} ${inY(63)})`}>60" window</text>

      {/* 29in door, bottom wall */}
      <line x1={inX(60)} y1={pad + l} x2={inX(89)} y2={pad + l} stroke={theme.text.tertiary} strokeWidth={5} />
      <text x={inX(74)} y={pad + l + 16} fill={theme.text.secondary} fontSize={10} textAnchor="middle">door 29"</text>

      {/* 28in door, right wall */}
      <line x1={pad + w} y1={inY(100)} x2={pad + w} y2={inY(128)} stroke={theme.text.tertiary} strokeWidth={5} />

      {/* Loft + office (right) */}
      <rect x={inX(56)} y={inY(2)} width={43 * s} height={80 * s} fill={theme.fill.tertiary} stroke={theme.accent.primary} strokeWidth={1.5} rx={3} />
      <text x={inX(77.5)} y={inY(40)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(77.5)} dy={-6}>Loft above</tspan>
        <tspan x={inX(77.5)} dy={12}>office below</tspan>
      </text>

      {/* Sewing station (left, under window) */}
      <rect x={inX(2)} y={inY(33)} width={26 * s} height={60 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(15)} y={inY(63)} fill={theme.text.primary} fontSize={10} textAnchor="middle">
        <tspan x={inX(15)} dy={-6}>Sewing</tspan>
        <tspan x={inX(15)} dy={12}>station</tspan>
      </text>

      {/* Storage bottom-left */}
      <rect x={inX(2)} y={inY(104)} width={34 * s} height={27 * s} fill={theme.fill.secondary} stroke={theme.stroke.secondary} strokeWidth={1.5} rx={3} />
      <text x={inX(19)} y={inY(118)} fill={theme.text.primary} fontSize={9.5} textAnchor="middle">Cube + cart</text>

      {/* Rug */}
      <rect x={inX(40)} y={inY(96)} width={42 * s} height={34 * s} fill={theme.fill.primary} stroke={theme.stroke.tertiary} strokeWidth={1.5} strokeDasharray="5 4" rx={3} />
      <text x={inX(61)} y={inY(114)} fill={theme.text.tertiary} fontSize={10} textAnchor="middle">rug</text>

      <text x={pad + w / 2} y={pad - 12} fill={theme.text.tertiary} fontSize={11} textAnchor="middle">101" wide</text>
      <text x={pad + w + 16} y={pad + l / 2} fill={theme.text.tertiary} fontSize={11} textAnchor="middle" transform={`rotate(90 ${pad + w + 16} ${pad + l / 2})`}>133" long</text>
    </svg>
  );
}

export default function LoftSewingRoom() {
  const L = {
    harrietBee: "https://www.wayfair.com/baby-kids/pdp/harriet-bee-w119266927.html?piid=883270059%2C883270062",
    targetLoft: "https://www.target.com/p/twin-size-wood-loft-bed-with-desk-multiple-storage-shelves-and-wardrobe-gray-white-modernluxe/-/A-1003413014",
    vitval: "https://www.ikea.com/us/en/p/vitval-loft-bed-frame-with-desk-top-white-light-gray-s29303940/",
    stora: "https://www.ikea.com/us/en/p/stora-loft-bed-frame-black-80160867/",
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
    [<Link href={L.harrietBee}>Harriet Bee loft + built-in desk</Link>, "Wayfair", "~67–69\"", "Fits — feature pick"],
    [<Link href={L.targetLoft}>ModernLuxe / Bellemave twin loft</Link>, "Target", "~65–76\"", "Fits"],
    [<Link href={L.vitval}>VITVAL twin + desk top</Link>, "IKEA", "76¾\"", "Fits (needs 94½\")"],
    [<Link href={L.stora}>STORÅ full, solid pine</Link>, "IKEA", "84¼\"", "Needs 106\" — ~4½\" short"],
  ];
  const fitTone: Array<"success" | "danger" | undefined> = ["success", "success", "success", "danger"];

  const loftRows = [
    ["Wayfair", <Link href={L.harrietBee}>Harriet Bee loft bed w/ built-in desk & storage</Link>, "All-in-one loft + office + shelves (linked pick)", "~$400–600"],
    ["Target", <Link href={L.targetLoft}>ModernLuxe / Bellemave twin loft w/ desk</Link>, "Alt loft: built-in desk, drawers, stair storage", "~$350–550"],
    ["IKEA", <Link href={L.vitval}>VITVAL loft bed frame with desk top (twin)</Link>, "Lightest, cleanest; integrated desk surface", "~$259"],
  ];
  const sewRows = [
    ["IKEA", <Text as="span">2× <Link href={L.alex}>ALEX drawers</Link> + <Link href={L.lagkapten}>LAGKAPTEN</Link> top</Text>, "Classic sewing bench — notion drawers + sturdy top", "~$200–300"],
    ["IKEA", <Link href={L.skadis}>SKÅDIS pegboard + hooks</Link>, "Scissors, thread, rulers above the bench", "~$30+"],
    ["Target", <Link href={L.cart}>Brightroom 3-tier utility cart</Link>, "Mobile catch-all for active projects", "~$40"],
    ["Wayfair", <Link href={L.craftTable}>Adjustable craft/sewing table (optional)</Link>, "Dedicated height/tilt table vs. ALEX combo", "~$120–200"],
  ];
  const finishRows = [
    ["IKEA", <Link href={L.kallax}>KALLAX 2×2 / 2×4 + fabric bins</Link>, "Folded fabric, books; doubles as divider", "~$70–110"],
    ["Target", <Link href={L.cube}>Brightroom cube organizer + drawers</Link>, "Alt cube storage in white/wood", "~$50–90"],
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
          a lofted bed, a sewing station under the window, and an office desk
          beneath the loft.
        </Text>
        <Row gap={8} wrap>
          <Pill size="sm">1 · Loft sleeping platform</Pill>
          <Pill size="sm">2 · Sewing station</Pill>
          <Pill size="sm">3 · Office desk</Pill>
        </Row>
      </Stack>

      <Callout tone="success" title="The ceiling now works for a real loft">
        At 101.5" (8'5½"), a standing loft is viable — IKEA VITVAL (needs 94½")
        fits, and the Wayfair Harriet Bee and Target loft beds (~65–69" tall,
        ~54" to the loft base) leave full headroom below for the desk. Only
        IKEA's tall STORÅ (needs 106") still misses, by ~4½".
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
            Schematic, not to scale. Loft + office along the right wall; sewing
            bench under the window for daylight; storage and rug fill center-left.
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
        <H3 style={{ margin: 0 }}>The loft — sleep + office desk</H3>
        <Table
          headers={["Retailer", "Product", "Why", "Approx."]}
          rows={loftRows}
          columnAlign={["left", "left", "left", "right"]}
        />
      </Stack>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Sewing station — under the window</H3>
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
              <Text><Text weight="semibold">Right wall:</Text> loft up top, office desk + chair below, ladder at the foot.</Text>
              <Divider />
              <Text><Text weight="semibold">Left wall (window):</Text> sewing bench for daylight, pegboard above, drawers below.</Text>
              <Divider />
              <Text><Text weight="semibold">Center-left:</Text> cube storage + rolling cart, rug anchoring the open floor.</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Watch-outs</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>• Keep the 60" window clear of tall storage so daylight reaches the bench.</Text>
              <Text>• Leave swing clearance for the 28" and 29" doors on the right/bottom walls.</Text>
              <Text>• Confirm the loft footprint (~42" × 80" twin) against the 101" wall before buying.</Text>
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
