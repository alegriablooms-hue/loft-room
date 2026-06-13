import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

const PX_PER_FT = 24;
const ROOM_W_FT = 10;
const ROOM_L_FT = 16;

function FloorPlan() {
  const theme = useHostTheme();
  const pad = 28;
  const w = ROOM_W_FT * PX_PER_FT;
  const l = ROOM_L_FT * PX_PER_FT;
  const svgW = w + pad * 2;
  const svgH = l + pad * 2;

  const ft = (n: number) => n * PX_PER_FT;

  // Zones, in feet, measured from the top-left interior corner.
  const zones = [
    {
      label: "Loft bed above / sewing station below",
      x: 0,
      y: 0,
      zw: 6.5,
      zl: 6.8,
      fill: theme.fill.tertiary,
      stroke: theme.accent.primary,
    },
    {
      label: "Desk run (LINNMON + 2×ALEX)",
      x: 0.2,
      y: 5.0,
      zw: 6.1,
      zl: 1.6,
      fill: theme.fill.secondary,
      stroke: theme.stroke.secondary,
    },
    {
      label: "Ladder",
      x: 6.7,
      y: 0,
      zw: 1.6,
      zl: 3.0,
      fill: theme.fill.secondary,
      stroke: theme.stroke.secondary,
    },
    {
      label: "KALLAX fabric storage",
      x: 0,
      y: 8.4,
      zw: 1.4,
      zl: 4.75,
      fill: theme.fill.secondary,
      stroke: theme.stroke.secondary,
    },
    {
      label: "Rug",
      x: 2.6,
      y: 8.5,
      zw: 5.5,
      zl: 5.0,
      fill: theme.fill.primary,
      stroke: theme.stroke.tertiary,
      dashed: true,
    },
  ];

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${svgW} ${svgH}`}
      style={{ maxWidth: svgW, display: "block" }}
      role="img"
      aria-label="Top-down floor plan of a 10 by 16 foot room"
    >
      {/* Room outline */}
      <rect
        x={pad}
        y={pad}
        width={w}
        height={l}
        fill={theme.bg.elevated}
        stroke={theme.stroke.primary}
        strokeWidth={2}
      />

      {/* Window on far (top) wall */}
      <line
        x1={pad + ft(3)}
        y1={pad}
        x2={pad + ft(7)}
        y2={pad}
        stroke={theme.accent.primary}
        strokeWidth={4}
      />
      <text
        x={pad + ft(5)}
        y={pad - 10}
        fill={theme.text.secondary}
        fontSize={11}
        textAnchor="middle"
      >
        window
      </text>

      {/* Door on bottom wall */}
      <line
        x1={pad + ft(7)}
        y1={pad + l}
        x2={pad + ft(9.5)}
        y2={pad + l}
        stroke={theme.text.tertiary}
        strokeWidth={4}
      />
      <text
        x={pad + ft(8.25)}
        y={pad + l + 16}
        fill={theme.text.secondary}
        fontSize={11}
        textAnchor="middle"
      >
        door
      </text>

      {zones.map((z) => {
        const zx = pad + ft(z.x) + 2;
        const zy = pad + ft(z.y) + 2;
        const zw = ft(z.zw) - 4;
        const zl = ft(z.zl) - 4;
        return (
          <g key={z.label}>
            <rect
              x={zx}
              y={zy}
              width={zw}
              height={zl}
              fill={z.fill}
              stroke={z.stroke}
              strokeWidth={1.5}
              strokeDasharray={z.dashed ? "5 4" : undefined}
              rx={3}
            />
            <text
              x={zx + zw / 2}
              y={zy + zl / 2}
              fill={theme.text.primary}
              fontSize={10.5}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {z.label.split(" / ").map((line, i, arr) => (
                <tspan
                  key={line}
                  x={zx + zw / 2}
                  dy={i === 0 ? -(arr.length - 1) * 6 : 12}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* Width dimension label (bottom) */}
      <text
        x={pad + w / 2}
        y={pad + l + 16}
        fill={theme.text.tertiary}
        fontSize={11}
        textAnchor="middle"
      >
        10 ft wide
      </text>
      {/* Length dimension label (left, rotated) */}
      <text
        x={pad - 14}
        y={pad + l / 2}
        fill={theme.text.tertiary}
        fontSize={11}
        textAnchor="middle"
        transform={`rotate(-90 ${pad - 14} ${pad + l / 2})`}
      >
        16 ft long
      </text>
    </svg>
  );
}

export default function LoftSewingRoom() {
  const theme = useHostTheme();

  const loftRows = [
    ["STORÅ", "Full / solid pine", "84¼\"", "8'10\"+", "Matches reference, but too tall"],
    ["VITVAL + desk top", "Twin / white", "76¾\"", "94½\"", "Closest off-the-shelf — still won't fit"],
    ["Low / mid-loft build", "Custom birch ply", "~58\" platform", "Fits 7'", "Crawl-in bed, seated work below"],
  ];
  const loftTone: Array<"danger" | "warning" | "success" | undefined> = [
    "danger",
    "danger",
    "success",
  ];

  const productRows = [
    ["ALEX drawer unit ×2", "White", "Desk legs + thread/notions storage", "~$130 ea"],
    ["LINNMON / LAGKAPTEN top", "Light wood", "Desk surface spanning the ALEX units", "~$40–70"],
    ["MICKE desk (alt.)", "White", "All-in-one option if you skip the combo", "~$99"],
    ["SKÅDIS pegboard + hooks", "Birch", "Scissors, thread, rulers above the desk", "~$30+"],
    ["KALLAX 2×4 shelf", "White", "Folded fabric + bins (left wall)", "~$80"],
    ["RÅSKOG cart", "Gray/white", "Mobile catch-all for active projects", "~$45"],
    ["MALSKÄR / GUNRIK chair", "White", "Swivel sewing chair", "~$80–130"],
  ];

  return (
    <Stack gap={20} style={{ padding: 24, maxWidth: 900 }}>
      <Stack gap={6}>
        <Row align="center" gap={10}>
          <H2 style={{ margin: 0 }}>Loft + Sewing Room — Design Brief</H2>
          <Pill size="sm">10' × 16' × 7'</Pill>
        </Row>
        <Text tone="secondary">
          Narrow room with a light-birch Scandinavian loft bed and a dedicated
          sewing station underneath, sourced from IKEA.
        </Text>
      </Stack>

      <Callout tone="warning" title="Ceiling height is the binding constraint">
        At a <Text weight="semibold">7' (84")</Text> ceiling, no off-the-shelf
        IKEA loft bed fits — STORÅ needs 8'10"+ and VITVAL needs 7'10½". A{" "}
        <Text weight="semibold">low/mid-loft</Text> (platform ~58") is the
        realistic path: ~58" of seated workspace below, but a crawl-in bed
        rather than sit-up headroom above.
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat value="10 ft" label="Width" />
        <Stat value="16 ft" label="Length" />
        <Stat value="7 ft" label="Ceiling" tone="warning" />
        <Stat value="~58 in" label="Loft platform" tone="info" />
      </Grid>

      <Grid columns="1fr 1fr" gap={20} align="start">
        <Stack gap={8}>
          <H3 style={{ margin: 0 }}>Top-down layout</H3>
          <FloorPlan />
          <Text size="small" tone="tertiary">
            Schematic, not to scale. Loft footprint at the window end; desk runs
            beneath it, fabric storage along the left wall.
          </Text>
        </Stack>

        <Stack gap={12}>
          <H3 style={{ margin: 0 }}>Loft bed: fit check</H3>
          <Table
            headers={["Option", "Type", "Height", "Needs", "Verdict"]}
            rows={loftRows}
            rowTone={loftTone}
            columnAlign={["left", "left", "right", "right", "left"]}
          />
          <Text size="small" tone="tertiary">
            Source: IKEA.com product specs (US), checked 2026.
          </Text>
        </Stack>
      </Grid>

      <Stack gap={10}>
        <H3 style={{ margin: 0 }}>Under-loft sewing station — IKEA sourcing</H3>
        <Table
          headers={["Product", "Finish", "Role", "Approx. price"]}
          rows={productRows}
          columnAlign={["left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Grid columns="1fr 1fr" gap={16} align="start">
        <Card>
          <CardHeader>Two realistic paths</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>
                <Text weight="semibold">1. Low/mid-loft build</Text> — platform
                ~58", seated sewing below, crawl-in bed above. No exact IKEA SKU;
                a custom birch platform or IKEA hack.
              </Text>
              <Divider />
              <Text>
                <Text weight="semibold">2. Skip the loft</Text> — daybed plus a
                wall-mounted sewing zone if you want full standing headroom.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Next steps</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>• Confirm low-loft build vs. dropping the loft.</Text>
              <Text>• Re-render to match the chosen approach.</Text>
              <Text>• Option: straight-on elevation of the sewing wall.</Text>
              <Text>• Option: warmer cream palette from reference #1.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Text size="small" tone="tertiary" italic>
        The chat render is an artistic visualization — dimensions are
        approximated and furniture resembles, but is not an exact copy of, the
        IKEA pieces listed.
      </Text>
    </Stack>
  );
}
