
import { Question } from '../types';

export const MECHANICAL_PROPERTIES_FLUIDS_QUESTIONS: Question[] = [
  // --- 1 Mark MCQs ---
  {
    id: 101,
    text: "As the length of capillary tube is insufficient, the rise of liquid in it will be up to the top, in the absence of",
    options: ["insoluble impurity", "soluble impurity", "gravity", "critical temperature"],
    correctAnswerIndex: 2,
    explanation: "In the absence of gravity, the liquid would rise to the top regardless of length because gravity is the opposing force to capillary rise.",
    category: "1 Mark MCQ"
  },
  {
    id: 102,
    text: "n droplets of equal size of radius r coalesce to form a bigger drop of radius R. The energy liberated is equal to (T = Surface tension of water)",
    options: ["4πR²T", "4πr²T", "4π(R² - nr²)T", "4π(nr² - R²)T"],
    correctAnswerIndex: 3,
    explanation: "Energy liberated = Initial Surface Energy - Final Surface Energy = n(4πr²T) - 4πR²T = 4π(nr² - R²)T",
    category: "1 Mark MCQ"
  },
  {
    id: 103,
    text: "A big drop of radius R is formed from 1000 droplets of water. The radius of a droplet will be",
    options: ["10R", "R/10", "R/100", "R/1000"],
    correctAnswerIndex: 1,
    explanation: "Volume is conserved: 1000 * (4/3)πr³ = (4/3)πR³ => 1000r³ = R³ => 10r = R => r = R/10",
    category: "1 Mark MCQ"
  },
  {
    id: 104,
    text: "In which of the following substances does surface tension increase with increase in temperature?",
    options: ["Copper", "Molten copper", "Iron", "Molten iron"],
    correctAnswerIndex: 1,
    explanation: "For most liquids, surface tension decreases with temperature. However, for molten copper and cadmium, surface tension increases with temperature.",
    category: "1 Mark MCQ"
  },
  {
    id: 105,
    text: "Angle of contact for the pair of pure water with clean glass is",
    options: ["acute", "obtuse", "90°", "0°"],
    correctAnswerIndex: 3,
    explanation: "Pure water wets clean glass completely, so the angle of contact is 0°.",
    category: "1 Mark MCQ"
  },
  {
    id: 106,
    text: "If two capillary tubes of different diameters are partially dipped in the same liquid vertically, then the rise of liquid",
    options: ["is same in both the tubes", "is more in the tube of larger diameter", "will not be in smaller diameter tube", "is more in the tube of smaller diameter"],
    correctAnswerIndex: 3,
    explanation: "Capillary rise h is inversely proportional to radius r (h ∝ 1/r). Thus, liquid rises more in the smaller diameter tube.",
    category: "1 Mark MCQ"
  },
  {
    id: 107,
    text: "1000 tiny mercury droplets coalesce to form a bigger drop. In this process, temperature of the drop",
    options: ["increases", "may increase or decrease", "decreases", "does not change"],
    correctAnswerIndex: 0,
    explanation: "Surface area decreases -> Surface energy decreases -> Energy is released as heat -> Temperature increases.",
    category: "1 Mark MCQ"
  },
  {
    id: 108,
    text: "A rectangular film of a liquid 1 cm long and 4 cm wide. If the work done in increasing its area to 7 cm × 5 cm is 0.06 J, the surface tension of the solution is:",
    options: ["0.02 J/m²", "0.2 J/m²", "2 J/m²", "20 J/m²"],
    correctAnswerIndex: 1,
    explanation: "Work = T * 2 * ΔA. 0.06 = T * 2 * (35 - 4) * 10^-4. T = 0.2 J/m².",
    category: "1 Mark MCQ"
  },
  {
    id: 109,
    text: "When a sparingly soluble substance like alcohol is dissolved in water, surface tension of water",
    options: ["increases", "decreases", "remains constant", "becomes infinite"],
    correctAnswerIndex: 1,
    explanation: "Adding impurities like alcohol weakens the cohesive forces between water molecules, decreasing surface tension.",
    category: "1 Mark MCQ"
  },
  {
    id: 110,
    text: "Two droplets coalesce in a single drop. In this process",
    options: ["energy is liberated", "energy is absorbed", "energy does not change", "some mass is converted into energy"],
    correctAnswerIndex: 0,
    explanation: "Total surface area decreases, so surface energy decreases. The difference is liberated as heat.",
    category: "1 Mark MCQ"
  },
  {
    id: 111,
    text: "A liquid rises in glass capillary tube up to a height of 2.5 cm at room temperature. If another glass capillary tube having radius half that of the earlier tube is immersed in the same liquid, the rise of liquid in it will be",
    options: ["1.25 cm", "2.5 cm", "5 cm", "10 cm"],
    correctAnswerIndex: 2,
    explanation: "h ∝ 1/r. If radius is halved (r/2), height doubles. 2.5 cm * 2 = 5 cm.",
    category: "1 Mark MCQ"
  },

  // --- 1 Mark Very Short Answer Questions ---
  {
    id: 201,
    text: "Define angle of contact.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "The angle between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid, measured through the liquid.",
    category: "1 Mark VSA"
  },
  {
    id: 202,
    text: "State the formula for critical velocity in terms of Reynolds’s number for a flow of a fluid.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "vc = (Re * η) / (ρ * r)\nWhere:\nRe = Reynolds’s number\nη = coefficient of viscosity\nρ = density of fluid\nr = radius of the tube",
    category: "1 Mark VSA"
  },

  // --- 2 Marks Theory Questions ---
  {
    id: 301,
    text: "Derive the relation between surface tension and surface energy per unit area.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Surface tension (T) is work done to increase surface area by unit amount.\n2. For a rectangular film, Work = T * ΔA.\n3. Surface Energy = Work / ΔA = (T * ΔA) / ΔA = T.\n4. Thus, Surface Tension is numerically equal to Surface Energy per unit area.",
    category: "2 Marks"
  },
  {
    id: 302,
    text: "Explain the rise of liquid in the capillary on the basis of pressure difference.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. A concave meniscus creates a pressure difference (2T/r) across the surface.\n2. Pressure just below the meniscus is less than atmospheric pressure.\n3. To balance this, liquid rises until hydrostatic pressure (hρg) equals the pressure deficit.\n4. Equilibrium: hρg = 2Tcosθ/r.",
    category: "2 Marks"
  },
  {
    id: 303,
    text: "Derive an expression for excess pressure inside a drop of liquid.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Consider a drop of radius R. Work done to increase radius by dR is dW = T * 8πR dR.\n2. Work is also Force * Displacement = (P * 4πR²) * dR.\n3. Equating both: P * 4πR² dR = T * 8πR dR.\n4. Excess Pressure P = 2T / R.",
    category: "2 Marks"
  },
  {
    id: 304,
    text: "Define coefficient of viscosity. State its formula and S.I. units.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Definition: Tangential force per unit area required to maintain unit velocity gradient between two parallel layers.\nFormula: η = F / (A * (dv/dx))\nS.I. Unit: N·s/m² or Pa·s",
    category: "2 Marks"
  },
  {
    id: 305,
    text: "Draw a neat labelled diagram showing forces acting on the meniscus of water in a capillary tube.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "You should draw:\n1. Concave meniscus.\n2. Surface tension T acting along tangent at point of contact (angle θ).\n3. Vertical component: Tcosθ upward (balancing weight).\n4. Horizontal component: Tsinθ outward (balanced by wall).",
    category: "2 Marks"
  },
  {
    id: 306,
    text: "What is capillarity? State any two applications.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Capillarity: The rise or fall of a liquid in a narrow tube due to surface tension.\nApplications:\n1. Absorption of ink by blotting paper.\n2. Rise of water from roots to leaves in plants.",
    category: "2 Marks"
  },
  {
    id: 307,
    text: "Define angle of contact. State its any two characteristics.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Definition: Angle between tangent to liquid surface at point of contact and solid surface inside the liquid.\nCharacteristics:\n1. It is acute for water-glass (θ < 90°), obtuse for mercury-glass (θ > 90°).\n2. It depends on nature of liquid and solid, independent of capillary radius.",
    category: "2 Marks"
  },
  {
    id: 308,
    text: "Draw a neat diagram for the rise of liquid in a capillary tube showing the components of surface tension.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Diagram should show:\n- Capillary tube in liquid.\n- Concave meniscus.\n- T along tangent.\n- Tcosθ vertical (upward).\n- Tsinθ horizontal.",
    category: "2 Marks"
  },
  {
    id: 309,
    text: "Draw a neat labelled diagram for a liquid surface in contact with a solid, when the angle of contact is acute.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Diagram should show:\n- Solid surface horizontal.\n- Liquid spreading with concave meniscus.\n- Tangent at contact point making acute angle (θ < 90°) through the liquid.",
    category: "2 Marks"
  },

  // --- 2 Marks Numericals ---
  {
    id: 401,
    text: "The surface tension of water at 0°C is 75.5 dyne/cm. Find surface tension of water at 25°C. [α = 0.0021/°C]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Formula: Tt = T0(1 - αt)\nT25 = 75.5 * (1 - 0.0021 * 25)\nT25 = 75.5 * (1 - 0.0525)\nT25 = 75.5 * 0.9475 = 71.54 dyne/cm",
    category: "2 Marks"
  },
  {
    id: 402,
    text: "A soap bubble of radius 12 cm is blown. Surface tension = 30 dyne/cm. Calculate work done.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Soap bubble has 2 surfaces.\nWork = 8πR²T\nW = 8 * 3.142 * (12)² * 30\nW = 8 * 3.142 * 144 * 30\nWork = 108,529.92 erg",
    category: "2 Marks"
  },
  {
    id: 403,
    text: "Water rises to 3.2 cm in a capillary. Find height in another capillary with half area of cross-section.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Area ∝ r². If area is halved, r' = r/√2.\nh ∝ 1/r => h' = h√2.\nh' = 3.2 * 1.414 ≈ 4.525 cm",
    category: "2 Marks"
  },
  {
    id: 404,
    text: "Raindrop diameter = 4 mm. T = 0.072 N/m. Find excess pressure.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Radius r = 2 mm = 2e-3 m.\nExcess Pressure P = 2T/r\nP = (2 * 0.072) / 2e-3\nP = 72 N/m²",
    category: "2 Marks"
  },
  {
    id: 405,
    text: "Energy of free surface = 5T. Find diameter (C.G.S.).",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Surface Energy = 4πr²T = 5T => 4πr² = 5.\nr² = 5/4π => r ≈ 0.631 cm.\nDiameter = 2r ≈ 1.262 cm",
    category: "2 Marks"
  },
  {
    id: 406,
    text: "Total surface energy = 2πT. Find diameter (S.I.).",
    options: [],
    correctAnswerIndex: -1,
    explanation: "4πr²T = 2πT => 2r² = 1 => r = 1/√2 = 0.707 m.\nDiameter = 2r = 1.414 m",
    category: "2 Marks"
  },
  {
    id: 407,
    text: "Two soap bubbles radii ratio 4:3. Ratio of work done?",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Work ∝ R² (since W = 8πR²T)\nW1/W2 = (R1/R2)²\nRatio = (4/3)² = 16/9",
    category: "2 Marks"
  },
  {
    id: 408,
    text: "Work done increasing soap bubble radius from 1 cm to 2 cm. T = 30 dyne/cm.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "W = 8πT(R2² - R1²)\nW = 8 * 3.142 * 30 * (4 - 1)\nW = 754.08 * 3 = 2262.24 erg",
    category: "2 Marks"
  },
  {
    id: 409,
    text: "Work done blowing soap bubble of radius 0.1 m. T = 30 dyne/cm.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Convert T to S.I.: 30 dyne/cm = 0.03 N/m\nW = 8πR²T = 8 * 3.142 * (0.1)² * 0.03\nW = 8 * 3.142 * 0.01 * 0.03\nW = 0.00754 J",
    category: "2 Marks"
  },
  {
    id: 410,
    text: "Compare work done for soap bubbles radii ratio 4 : 5.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Work ∝ R²\nW1/W2 = (4/5)² = 16/25",
    category: "2 Marks"
  },
  {
    id: 411,
    text: "Eight droplets (r = 0.2 mm) coalesce. Find decrease in surface area.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Vol: 8 * (4/3)πr³ = (4/3)πR³ => R=2r=0.4mm\nInitial Area = 8 * 4πr² = 32πr²\nFinal Area = 4πR² = 16πr²\nDecrease = 16πr² = 16 * 3.142 * (0.2)² = 2.01 mm²",
    category: "2 Marks"
  },
  {
    id: 412,
    text: "Pressure difference for water drop, r = 2 mm, T = 73 × 10⁻³ N/m.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "ΔP = 2T/r\nΔP = (2 * 73e-3) / (2e-3)\nΔP = 73 N/m²",
    category: "2 Marks"
  },
  {
    id: 413,
    text: "Work done blowing soap bubble, R = 1 cm, T = 2.5 × 10⁻² N/m.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "R = 0.01 m\nW = 8πR²T = 8 * 3.142 * (0.01)² * 2.5e-2\nW = 6.284e-5 J",
    category: "2 Marks"
  },

  // --- 3 Marks Theory Questions ---
  {
    id: 501,
    text: "Derive Laplace's law for spherical membrane of bubble due to surface tension.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Bubble has 2 surfaces. Surface force = 2 * T * 2πR = 4πRT.\n2. Outward force due to excess pressure P = P * πR².\n3. Equilibrium: P * πR² = 4πRT.\n4. P = 4T/R.",
    category: "3 Marks"
  },
  {
    id: 502,
    text: "Derive an expression for the rise of a liquid in a capillary tube.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Vertical component of surface tension = Tcosθ (upward).\n2. Total Upward Force = Tcosθ * 2πr.\n3. Weight of liquid = πr²hρg.\n4. Equilibrium: 2πrTcosθ = πr²hρg => h = 2Tcosθ / (rρg).",
    category: "3 Marks"
  },
  {
    id: 503,
    text: "On the basis of molecular theory, explain surface tension.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Molecules inside liquid experience zero net force.\n2. Molecules at surface experience net inward cohesive force.\n3. Work done to bring molecule to surface increases potential energy.\n4. Liquid tends to minimize surface area to minimize energy. This inward pull is Surface Tension.",
    category: "3 Marks"
  },
  {
    id: 504,
    text: "Derive terminal velocity of a spherical object falling through viscous medium.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "At terminal velocity, Net Force = 0.\nDownward Weight = Upward Buoyancy + Upward Viscous Drag\n4/3πr³ρg = 4/3πr³σg + 6πηrv\n6πηrv = 4/3πr³(ρ - σ)g\nv = [2r²(ρ - σ)g] / 9η",
    category: "3 Marks"
  },

  // --- 3 Marks Numericals ---
  {
    id: 505,
    text: "Capillary diameter = 0.25 mm, h = 4 cm, θ = 28°, g = 9.8 m/s². Find density of paraffin oil. (Assume T = 0.025 N/m)",
    options: [],
    correctAnswerIndex: -1,
    explanation: "r = 0.125 mm = 1.25e-4 m\nh = 0.04 m\nFormula: ρ = 2Tcosθ / (rhg)\nρ = (2 * 0.025 * cos(28°)) / (1.25e-4 * 0.04 * 9.8)\nρ ≈ 901 kg/m³",
    category: "3 Marks"
  },
  {
    id: 506,
    text: "Wire loop radius = 0.02 m, force = 0.0113 N. Find surface tension of crude oil.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Length of contact (2 surfaces) = 2 * 2πr = 4πr.\nForce = T * L => T = F / 4πr.\nT = 0.0113 / (4 * 3.142 * 0.02) ≈ 0.045 N/m",
    category: "3 Marks"
  }
];

export const KINETIC_THEORY_GASES_QUESTIONS: Question[] = [
  // --- 1 Mark MCQs ---
  {
    id: 601,
    text: "The pressure (P) of an ideal gas having volume (V) is P = 2E/3V, then the energy E is",
    options: ["translational kinetic energy", "rotational kinetic energy", "vibrational kinetic energy", "inversely proportional to pressure"],
    correctAnswerIndex: 0,
    explanation: "In kinetic theory, the pressure of an ideal gas is derived from the translational motion of molecules only. Hence, E represents total translational KE.",
    category: "1 Mark MCQ"
  },
  {
    id: 602,
    text: "The dimensions of emissive power are",
    options: ["[ML⁻²T⁻³]", "[MLT⁻³]", "[ML⁻¹T⁻³]", "[MLT⁻¹]"],
    correctAnswerIndex: 0,
    explanation: "Emissive power = Energy radiated per unit area per unit time → [ML²T⁻²] / ([L²][T]) = [ML⁻²T⁻³]",
    category: "1 Mark MCQ"
  },
  {
    id: 603,
    text: "For polyatomic molecules having f vibrational modes, the ratio of two specific heats, γ = Cp/Cv is",
    options: ["(2 + f)/f", "(4 + f)/(3 + f)", "(5 + f)/(2 + f)", "(4 + f)/(2 + f)"],
    correctAnswerIndex: 2,
    explanation: "Standard HSC result for polyatomic gas with f vibrational modes. γ = (5 + f)/(2 + f).",
    category: "1 Mark MCQ"
  },
  {
    id: 604,
    text: "Two gases exert pressure in the ratio 3 : 2 and their densities are in the ratio 2 : 3. Then the ratio of their R.M.S. velocities is",
    options: ["2 : 3", "3 : 2", "2 : 1", "1 : 2"],
    correctAnswerIndex: 1,
    explanation: "v_rms ∝ √(P/ρ). Ratio = √((3/2) / (2/3)) = √(9/4) = 3:2.",
    category: "1 Mark MCQ"
  },
  {
    id: 605,
    text: "If the pressure of an ideal gas decreases by 10% isothermally, then its volume will",
    options: ["decrease by 9%", "increase by 7%", "increase by 10%", "increase by 11.4%"],
    correctAnswerIndex: 3,
    explanation: "PV = constant. P2 = 0.9P1. V2 = V1/0.9 = 1.111V1. Increase is 11.1% (approx 11.4%).",
    category: "1 Mark MCQ"
  },
  {
    id: 606,
    text: "Find the wavelength at which a black body radiates maximum energy, if its temperature is 427°C. (b = 2.898 × 10⁻³ m·K)",
    options: ["0.0414 × 10⁻⁶ m", "4.14 × 10⁻⁶ m", "41.4 × 10⁻⁶ m", "414 × 10⁻⁶ m"],
    correctAnswerIndex: 1,
    explanation: "T = 427 + 273 = 700 K. λm = b/T = 2.898e-3 / 700 = 4.14 × 10⁻⁶ m.",
    category: "1 Mark MCQ"
  },
  {
    id: 607,
    text: "If the total kinetic energy per unit volume of gas enclosed in a container is E, the pressure exerted by the gas is",
    options: ["E", "2E/3", "√3E", "2/3 E"],
    correctAnswerIndex: 3,
    explanation: "From kinetic theory, P = (2/3) * (KE per unit volume) = 2/3 E.",
    category: "1 Mark MCQ"
  },
  {
    id: 608,
    text: "The kinetic energy per molecule of a gas at temperature T is",
    options: ["1/2 kT", "kT", "3/2 kT", "2/3 kT"],
    correctAnswerIndex: 2,
    explanation: "For monatomic gas, KE per molecule = (3/2)kT (translational only).",
    category: "1 Mark MCQ"
  },
  {
    id: 609,
    text: "The number of degrees of freedom for a rigid diatomic molecule is",
    options: ["3", "5", "6", "7"],
    correctAnswerIndex: 1,
    explanation: "Rigid diatomic: 3 translational + 2 rotational = 5 degrees of freedom.",
    category: "1 Mark MCQ"
  },

  // --- 1 Mark VSA ---
  {
    id: 701,
    text: "Define: (i) Emissive power (ii) Co-efficient of emission",
    options: [],
    correctAnswerIndex: -1,
    explanation: "(i) Emissive power: Radiant energy emitted per unit area per unit time.\n(ii) Coefficient of emission (e): Ratio of emissive power of a body to that of a perfectly black body at same temperature.",
    category: "1 Mark VSA"
  },
  {
    id: 702,
    text: "Draw a neat, labelled diagram of Ferry’s black body.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Imagine a hollow double-walled metal sphere with a small hole.\n- Inner surface blackened.\n- Conical projection opposite to hole.\n- Outer wall polished.\n- Radiation enters and reflects multiple times.",
    category: "1 Mark VSA"
  },
  {
    id: 703,
    text: "State: (a) Stefan-Boltzmann law of radiation (b) Wien’s displacement law",
    options: [],
    correctAnswerIndex: -1,
    explanation: "(a) Stefan-Boltzmann Law: E = σT⁴ (Energy per unit area per unit time ∝ T⁴).\n(b) Wien’s Law: λm T = b (Wavelength of max emission is inversely proportional to T).",
    category: "1 Mark VSA"
  },

  // --- 2 Marks Theory ---
  {
    id: 801,
    text: "On the basis of kinetic theory of gases, explain why the pressure of a gas increases with temperature at constant volume.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Temp increase -> avg KE increases -> molecules move faster.\n2. Greater momentum change per collision & more frequent collisions.\n3. Force per unit area (Pressure) increases.\n4. Since V is constant, P ∝ T.",
    category: "2 Marks"
  },
  {
    id: 802,
    text: "State Kirchhoff’s law of radiation and prove it theoretically.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Statement: At thermal equilibrium, E/a = Eb (Ratio of emissive power to absorptive power is constant and equal to emissive power of black body).\nProof: Consider body A and Black Body B in enclosure. At equilibrium, energy emitted = energy absorbed. For B: E_b = Incident. For A: E = a * Incident. Thus E = a * E_b => E/a = E_b.",
    category: "2 Marks"
  },
  {
    id: 803,
    text: "What is a perfectly black body? Explain Ferry’s black body.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Perfectly Black Body: Absorbs all incident radiation (a=1).\nFerry's Body: Hollow sphere with small hole. Inner surface blackened. Radiation entering hole suffers multiple reflections and is absorbed. The hole acts as a black body radiator.",
    category: "2 Marks"
  },
  {
    id: 804,
    text: "Explain Maxwell’s distribution of molecular speeds with a necessary graph.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Molecules have range of speeds.\n2. Graph: Fraction of molecules vs Speed. Starts at 0, peaks at Most Probable Speed (vp), falls off.\n3. vp < v_avg < v_rms.",
    category: "2 Marks"
  },

  // --- 2 Marks Numericals ---
  {
    id: 901,
    text: "A pinhole is made in a hollow sphere of radius 5 cm whose inner wall is at temperature 727°C. Find the power radiated per unit area. [σ = 5.7 × 10⁻⁸ unit, e = 0.2]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "T = 1000 K.\nPower/Area = eσT⁴\n= 0.2 * 5.7e-8 * (1000)⁴\n= 0.2 * 5.7 * 10000 = 1.14 × 10⁴ W/m².",
    category: "2 Marks"
  },
  {
    id: 902,
    text: "Compute the temperature at which the r.m.s. speed of nitrogen molecules is 832 m/s. [R = 8320 J/kmol·K, M = 28]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "v² = 3RT/M => T = Mv² / 3R.\nT = (28 * 832 * 832) / (3 * 8320)\n= (28 * 832) / 30 ≈ 776.5 K.",
    category: "2 Marks"
  },
  {
    id: 903,
    text: "A body cools at the rate of 0.5°C/min when it is 25°C above the surroundings. Calculate the rate of cooling when it is 15°C above the same surroundings.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Rate ∝ excess temp (θ).\nR1/R2 = θ1/θ2\n0.5/R2 = 25/15 = 5/3\nR2 = 0.5 * 3/5 = 0.3°C/min.",
    category: "2 Marks"
  },
  {
    id: 904,
    text: "At what temperature will average kinetic energy of a gas be exactly half of its value at N.T.P.?",
    options: [],
    correctAnswerIndex: -1,
    explanation: "KE ∝ T.\nNTP T1 = 273 K.\nKE2 = 0.5 KE1 => T2 = 0.5 T1\nT2 = 136.5 K.",
    category: "2 Marks"
  },
  {
    id: 905,
    text: "The difference between the two molar specific heats of a gas is 9000 J/kg·K. If the ratio of the two molar specific heats is 1.5, calculate the two specific heats.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Cp - Cv = 9000; Cp/Cv = 1.5 => Cp = 1.5Cv.\n1.5Cv - Cv = 9000 => 0.5Cv = 9000 => Cv = 18000 J/kg·K.\nCp = 1.5 * 18000 = 27000 J/kg·K.",
    category: "2 Marks"
  },
  {
    id: 906,
    text: "Compare the rate of loss of heat from a metal sphere at 827°C with that at 427°C, if the temperature of surroundings is 27°C.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "T1=1100K, T2=700K, T0=300K.\nRate ∝ (T⁴ - T0⁴).\nRatio = (1100⁴ - 300⁴) / (700⁴ - 300⁴)\n≈ 1.46e12 / 2.32e11 ≈ 6.28.",
    category: "2 Marks"
  },

  // --- 3 Marks Theory ---
  {
    id: 1001,
    text: "Derive an expression for the pressure exerted by a gas on the basis of kinetic theory of gases.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1. Cube side L, N molecules mass m.\n2. Change in momentum per collision = 2mvx.\n3. Force = rate of momentum change = mvx²/L.\n4. P = Force/Area = (mN/V) * (v_avg²/3) = (1/3)ρv_rms² = (2/3)E.",
    category: "3 Marks"
  },
  {
    id: 1002,
    text: "Explain the construction and working of a perfectly black body using Ferry’s design.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Construction: Double walled sphere, blackened inside, small aperture.\nWorking: Radiation enters, reflects internally, 98% absorbed per reflection. Effectively acts as a perfect absorber (a=1).",
    category: "3 Marks"
  },
  {
    id: 1003,
    text: "State and explain the law of equipartition of energy. Hence find the specific heats of monoatomic and diatomic gases.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "Law: Energy equally distributed per degree of freedom (1/2 kT).\nMonoatomic: 3 DoF => Cv = 3/2 R.\nDiatomic: 5 DoF => Cv = 5/2 R.",
    category: "3 Marks"
  },

  // --- 3 Marks Numericals ---
  {
    id: 1101,
    text: "Calculate the kinetic energy of 10 gram of Argon molecules at 127°C. [R = 8320 J/kmol·K, M = 40]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "n = 10/40 = 0.25 mol. T = 400 K.\nKE = 3/2 nRT (Monoatomic)\n= 1.5 * 0.25 * 8320 * 400\n= 1,248,000 J.",
    category: "3 Marks"
  },
  {
    id: 1102,
    text: "The kinetic energy of nitrogen per unit mass at 300 K is 2.5 × 10⁵ J/kg. Find the kinetic energy of 4 kg oxygen at 600 K. [M_N2 = 28, M_O2 = 32]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "KE/kg ∝ T/M.\nRatio (O/N) = (600/300) * (28/32) = 2 * 7/8 = 1.75.\n(KE/kg)_O = 1.75 * 2.5e5 = 4.375e5.\nTotal KE = 4 * 4.375e5 = 1.75 × 10⁶ J.",
    category: "3 Marks"
  },
  {
    id: 1103,
    text: "Calculate the average molecular kinetic energy: (a) per kilomole (b) per kilogram of oxygen at 27°C [R = 8320 J/kmol·K]",
    options: [],
    correctAnswerIndex: -1,
    explanation: "T = 300 K. Diatomic (O2) DoF=5.\n(a) Per kmol = 5/2 RT = 2.5 * 8320 * 300 = 6,240,000 J.\n(b) Per kg = 6240000 / 32 = 195,000 J.",
    category: "3 Marks"
  },
  {
    id: 1104,
    text: "A metal sphere cools at the rate of 4°C/min when its temperature is 50°C and the surrounding temperature is 25°C. Find its rate of cooling at 45°C.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "θ1 = 50-25=25. R1=4.\nθ2 = 45-25=20.\nR2 = R1 * (20/25) = 4 * 0.8 = 3.2°C/min.",
    category: "3 Marks"
  },
  {
    id: 1105,
    text: "A body cools from 62°C to 54°C in 10 minutes and to 48°C in the next 10 minutes. Find the temperature of the surroundings.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1) Avg=58, Rate=0.8. 0.8 ∝ (58-T0)\n2) Avg=51, Rate=0.6. 0.6 ∝ (51-T0)\n0.8/0.6 = (58-T0)/(51-T0) => 4/3 ratio.\nSolving: T0 = 30°C.",
    category: "3 Marks"
  },
  {
    id: 1106,
    text: "A body cools from 80°C to 70°C in 5 minutes and to 62°C in the next 5 minutes. Calculate the temperature of the surroundings.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "1) Avg=75, Rate=2. 2 ∝ (75-T0)\n2) Avg=66, Rate=1.6. 1.6 ∝ (66-T0)\n2/1.6 = 5/4.\n5(66-T0) = 4(75-T0) => 330-5T0 = 300-4T0 => T0 = 30°C.",
    category: "3 Marks"
  },
  {
    id: 1107,
    text: "Calculate the energy radiated in half a minute by a black body of surface area 200 cm² at 127°C.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "A=0.02 m², T=400 K, t=30 s.\nE = σAT⁴t = 5.67e-8 * 0.02 * 2.56e10 * 30\n≈ 870 J.",
    category: "3 Marks"
  },
  {
    id: 1108,
    text: "Compare the rates of loss of heat by a black body at 627°C and 327°C if the temperature of surroundings is 27°C.",
    options: [],
    correctAnswerIndex: -1,
    explanation: "T1=900K, T2=600K, T0=300K.\nRatio = (900⁴ - 300⁴) / (600⁴ - 300⁴)\n= (65.61 - 0.81) / (12.96 - 0.81) = 64.8 / 12.15 ≈ 5.33.",
    category: "3 Marks"
  }
];
