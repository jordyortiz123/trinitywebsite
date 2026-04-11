"use client";

export interface WaiverData {
  customerName: string;
  phone: string;
  email: string;
  eventDate: string;
  eventTime: string;
  eventType: string;
  address: string;
  kidCount: number;
  selectedPackage: string;
  signatureDate: string;
}

export function generateWaiverHTML(data: WaiverData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Liability Waiver & Rental Agreement — Fiesta Fun Familia with Trinity</title>
<style>
  @media print {
    body { margin: 0.5in; }
    .no-print { display: none !important; }
    @page { margin: 0.5in; size: letter; }
  }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #1a1a1a;
    max-width: 8in;
    margin: 0 auto;
    padding: 0.5in;
  }
  h1 { font-size: 16pt; text-align: center; margin-bottom: 4pt; text-transform: uppercase; letter-spacing: 1px; }
  h2 { font-size: 13pt; text-align: center; margin-top: 2pt; margin-bottom: 16pt; font-weight: normal; }
  h3 { font-size: 12pt; margin-top: 16pt; margin-bottom: 6pt; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 3pt; }
  p { margin: 6pt 0; text-align: justify; }
  .header { text-align: center; border-bottom: 3px double #333; padding-bottom: 12pt; margin-bottom: 16pt; }
  .header .company { font-size: 18pt; font-weight: bold; letter-spacing: 2px; }
  .header .sub { font-size: 10pt; color: #555; }
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6pt 20pt; margin: 12pt 0; padding: 10pt; border: 1px solid #ddd; background: #fafafa; }
  .info-grid .label { font-weight: bold; font-size: 9pt; text-transform: uppercase; color: #555; }
  .info-grid .value { font-size: 11pt; border-bottom: 1px solid #ccc; padding-bottom: 2pt; min-height: 16pt; }
  .section { margin-top: 12pt; }
  .indent { margin-left: 20pt; }
  .list { margin: 4pt 0 4pt 30pt; }
  .list li { margin: 3pt 0; }
  .signature-block { margin-top: 30pt; page-break-inside: avoid; }
  .sig-line { border-bottom: 1px solid #333; margin-top: 30pt; width: 60%; display: inline-block; }
  .sig-label { font-size: 9pt; color: #555; text-transform: uppercase; margin-top: 2pt; }
  .sig-row { display: flex; justify-content: space-between; margin-top: 20pt; }
  .sig-col { width: 45%; }
  .important { font-weight: bold; text-transform: uppercase; }
  .highlight-box { border: 2px solid #333; padding: 10pt; margin: 12pt 0; background: #f9f9f9; }
  .footer { text-align: center; font-size: 8pt; color: #888; margin-top: 24pt; border-top: 1px solid #ddd; padding-top: 8pt; }
  .btn-print { display: block; margin: 20pt auto; padding: 12pt 40pt; font-size: 14pt; background: #E63946; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
  .btn-print:hover { background: #c5303c; }
  .watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); font-size: 80pt; color: rgba(0,0,0,0.03); pointer-events: none; z-index: -1; font-weight: bold; }
</style>
</head>
<body>
<div class="watermark">FIESTA FUN FAMILIA</div>

<button class="btn-print no-print" onclick="window.print()">🖨️ Print / Save as PDF</button>

<div class="header">
  <div class="company">FIESTA FUN FAMILIA WITH TRINITY</div>
  <div class="sub">Party Rental Services — Denver, Colorado</div>
  <div class="sub">Phone: (303) 295-3886 | Email: jordyo3728@gmail.com</div>
  <div class="sub">Instagram: @jordy37 | Facebook: Jordy Ortiz</div>
</div>

<h1>RENTAL AGREEMENT, LIABILITY WAIVER<br>& ASSUMPTION OF RISK</h1>
<h2>Document No: FFF-${Date.now().toString(36).toUpperCase()} | Date: ${data.signatureDate}</h2>

<h3>SECTION 1 — CUSTOMER INFORMATION</h3>
<div class="info-grid">
  <div><span class="label">Customer Name:</span><div class="value">${data.customerName || '___________________________'}</div></div>
  <div><span class="label">Phone Number:</span><div class="value">${data.phone || '___________________________'}</div></div>
  <div><span class="label">Email Address:</span><div class="value">${data.email || '___________________________'}</div></div>
  <div><span class="label">Event Date:</span><div class="value">${data.eventDate || '___________________________'}</div></div>
  <div><span class="label">Event Time:</span><div class="value">${data.eventTime || '___________________________'}</div></div>
  <div><span class="label">Event Type:</span><div class="value">${data.eventType || '___________________________'}</div></div>
  <div><span class="label">Event Address:</span><div class="value">${data.address || '___________________________'}</div></div>
  <div><span class="label">Number of Children:</span><div class="value">${data.kidCount || '___________________________'}</div></div>
  <div><span class="label">Selected Package:</span><div class="value">${data.selectedPackage || '___________________________'}</div></div>
  <div><span class="label">Agreement Date:</span><div class="value">${data.signatureDate}</div></div>
</div>

<h3>SECTION 2 — RENTAL AGREEMENT</h3>

<p>This Rental Agreement, Liability Waiver, and Assumption of Risk (collectively, this "Agreement") is entered into by and between <strong>Fiesta Fun Familia with Trinity</strong>, a party equipment rental service operating in Denver, Colorado ("Company," "we," "us," or "our"), and the undersigned individual or entity ("Customer," "Renter," "you," or "your"), collectively referred to as the "Parties."</p>

<p>By signing this Agreement, making a booking, or using any equipment or services provided by the Company, you represent that you are at least eighteen (18) years of age, have the legal capacity to enter into this binding Agreement, and acknowledge that you have read, understood, and voluntarily agree to be bound by all terms, conditions, waivers, and releases set forth herein.</p>

<h3>SECTION 3 — RENTAL EQUIPMENT & PRICING</h3>

<p>All rentals are subject to availability and must be confirmed in writing by the Company. Current pricing is as follows (subject to change without prior notice):</p>

<ol class="list">
  <li><strong>Bouncy Castles (Brincolines):</strong> Small unit — $25.00 per hour for the first four (4) hours; Large unit — $50.00 per hour for the first four (4) hours. Full-day rates available upon request. Two (2) units available in total inventory.</li>
  <li><strong>Water Slides (Toboganes de Agua):</strong> $150.00 per day with a mandatory minimum rental period of four (4) hours. Water slides are designated water equipment. Two (2) units available.</li>
  <li><strong>Cotton Candy Machine (Máquina de Algodón de Azúcar):</strong> $50.00 per day for machine rental. Additional $50.00 for flavor supply kit (includes four (4) different flavors and all necessary supplies). Total with flavor kit: $100.00.</li>
  <li><strong>Photo Booth (Cabina de Fotos):</strong> Pricing available upon request. Includes professional backdrop, assorted props, and digital copies of all photographs.</li>
  <li><strong>Tables & Chairs (Mesas y Sillas):</strong> Custom pricing based on quantity and duration. Five to ten (5–10) tables and ten or more (10+) chairs available. Additional inventory can be arranged with sufficient advance notice.</li>
  <li><strong>Portable Sound System (Sistema de Sonido Portátil):</strong> Custom pricing based on event duration and specific equipment requirements.</li>
</ol>

<h3>SECTION 4 — BOOKING, DEPOSIT & PAYMENT TERMS</h3>

<p>A non-refundable deposit is required at the time of booking to secure the reservation date and equipment. The deposit amount shall be communicated at booking and applied toward the total rental cost. The remaining balance is due and payable in full on or before the event date, prior to equipment setup. The Company accepts cash, credit/debit cards, Venmo, Zelle, and other electronic payment methods. <strong>A valid credit or debit card must remain on file for the entire duration of the rental period</strong> to cover potential additional charges including, without limitation, cleaning fees, damage assessments, extended rental periods, and any other charges incurred under this Agreement. The Customer authorizes the Company to charge such card for any amounts owed under this Agreement.</p>

<h3>SECTION 5 — DELIVERY, SETUP, SITE REQUIREMENTS & REMOVAL</h3>

<p>Complimentary delivery, professional setup, and removal are included for locations within the Denver metropolitan area. Additional delivery and transportation fees may apply for locations outside the standard service area; such fees will be communicated and agreed upon prior to booking confirmation. The Customer shall ensure and is responsible for: (a) adequate and level ground surface suitable for inflatable equipment; (b) sufficient space for safe operation with appropriate clearance from structures, fences, trees, power lines, and other hazards; (c) access to a standard electrical outlet within 100 feet of the setup location; (d) accessible path for equipment delivery and removal; and (e) water source access for water slides, if applicable. The Company reserves the sole and absolute right to refuse setup, relocate equipment, or terminate the rental immediately and without refund if conditions are deemed unsafe or unsuitable, including but not limited to: uneven or inappropriate terrain, insufficient space, severe or threatening weather conditions, proximity to electrical hazards, or any condition that, in the Company's sole judgment, poses a risk to persons or property.</p>

<h3>SECTION 6 — EQUIPMENT USE, SUPERVISION & SAFETY REQUIREMENTS</h3>

<p>The Customer assumes full and complete responsibility for the care, supervision, safe operation, and proper use of all rented equipment during the entire rental period, commencing at setup completion and ending at scheduled removal. The following safety requirements are mandatory and non-negotiable:</p>

<ol class="list" type="a">
  <li><strong>Adult Supervision:</strong> At least one (1) competent adult (eighteen (18) years of age or older) must be present and actively supervising ALL inflatable equipment at ALL times when any person is using said equipment. This individual must not be impaired by alcohol, drugs, or any substance that would affect their ability to supervise.</li>
  <li><strong>Capacity Limits:</strong> The Customer shall strictly observe and enforce all posted capacity limits, age restrictions, and weight limits for each piece of equipment as designated by the Company.</li>
  <li><strong>Prohibited Activities:</strong> No food, drinks, gum, sharp objects, silly string, confetti, glass containers, shoes, jewelry, or any item that could damage equipment or injure participants shall be permitted on or near inflatable equipment.</li>
  <li><strong>Weather:</strong> All inflatable equipment must be immediately vacated and, if possible, deflated during rain, thunderstorms, high winds (sustained winds over 15 mph or gusts over 20 mph), lightning, or any other severe weather condition.</li>
  <li><strong>Water Restriction:</strong> Bouncy castles are DRY-USE ONLY. Under no circumstances shall water, hoses, sprinklers, water balloons, slip-and-slide materials, or any liquid be introduced to bouncy castle equipment. Water slides are the only equipment authorized for water use.</li>
</ol>

<p>Failure to comply with any of the foregoing safety requirements constitutes a material breach of this Agreement and may result in immediate termination of the rental without refund, plus any applicable fees.</p>

<h3>SECTION 7 — CLEANING & DISINFECTION FEES</h3>

<p>All equipment is delivered in a professionally cleaned, sanitized, and inspected condition. <strong>If bouncy castle equipment is found to have been exposed to water, excessive moisture, or any liquid (including but not limited to: direct water application, hose attachment, sprinklers, water balloons, or rain exposure due to Customer's failure to secure equipment), a mandatory cleaning, disinfection, and remediation fee of One Hundred Dollars ($100.00) will be assessed</strong> to cover professional sanitization, antimicrobial treatment, thorough drying, airing out, and mold/mildew prevention treatment. This fee is non-negotiable and will be charged to the credit card on file without additional notice. Additional cleaning fees may apply for equipment returned with excessive dirt, stains, bodily fluids, paint, markers, or any substance requiring special cleaning treatment, at rates commensurate with the cost of professional cleaning services.</p>

<h3>SECTION 8 — DAMAGE, LOSS & FINANCIAL RESPONSIBILITY</h3>

<p>The Customer is financially responsible for any and all damage to, or loss of, rental equipment beyond normal wear and tear occurring during the rental period or while equipment is in the Customer's custody or control, including but not limited to: tears, punctures, cuts, burns, stains that cannot be removed through normal cleaning, deflation due to Customer negligence, structural damage, vandalism, theft, or complete loss. <strong>Damage assessment fees of up to Five Hundred Dollars ($500.00) will be charged to the credit card on file</strong>. If the Customer has arranged an alternative payment method approved in advance by the Company, the damage fee shall be Three Hundred Dollars ($300.00). For damages, repairs, or replacements exceeding these amounts, the Customer shall be invoiced for the actual cost of repair or full replacement value at current market prices. The Company reserves the right to pursue all available legal remedies, including but not limited to filing suit in the appropriate Colorado court, for the collection of any unpaid amounts, plus interest at the maximum rate permitted by Colorado law, reasonable attorney's fees, court costs, and collection costs.</p>

<h3>SECTION 9 — CANCELLATION & REFUND POLICY</h3>

<p>(a) Cancellations made seventy-two (72) or more hours before the scheduled event date: full refund of all payments made, excluding the non-refundable deposit. (b) Cancellations made between forty-eight (48) and seventy-two (72) hours before the event: 50% refund of total payments made, excluding the deposit. (c) Cancellations made within forty-eight (48) hours of the event: no refund; all payments are forfeited. (d) No-shows: no refund; all payments are forfeited, and the Customer may be subject to the full rental amount. (e) Weather-related cancellations: handled on a case-by-case basis at the Company's sole discretion. The Company will make commercially reasonable efforts to reschedule weather-affected events, subject to equipment and date availability. Rescheduling is not guaranteed.</p>

<div class="highlight-box">
<h3 style="border:none; margin-top:0;">SECTION 10 — ASSUMPTION OF RISK & ACKNOWLEDGMENT OF DANGER</h3>

<p class="important">THE CUSTOMER AND/OR PARENT/LEGAL GUARDIAN EXPRESSLY ACKNOWLEDGES, UNDERSTANDS, AND AGREES TO THE FOLLOWING:</p>

<p>The use of inflatable recreational equipment (including but not limited to bouncy castles, bounce houses, jumping castles, water slides, and obstacle courses), photo booth equipment, cotton candy machines, and all other party rental equipment involves <strong>KNOWN AND UNKNOWN RISKS AND INHERENT DANGERS</strong> that no amount of care, caution, instruction, or expertise can eliminate. These risks include, without limitation:</p>

<ol class="list">
  <li>Falls from equipment, falls within equipment, and falls during entry or exit</li>
  <li>Collisions with other participants, the equipment itself, the ground, or nearby objects</li>
  <li>Sprains, strains, bruises, abrasions, lacerations, dislocations, and fractures</li>
  <li>Concussions, traumatic brain injuries, and spinal cord injuries</li>
  <li>Heat-related illness, dehydration, sunburn, and hypothermia</li>
  <li>Allergic reactions to materials, latex, food products (including cotton candy ingredients), or environmental factors</li>
  <li>Suffocation, entrapment, or asphyxiation in the event of equipment deflation</li>
  <li>Drowning or near-drowning incidents related to water slide use</li>
  <li>Electrical shock from equipment, generators, or electrical connections</li>
  <li>Equipment malfunction, failure, or sudden deflation despite proper maintenance</li>
  <li>Injuries caused by the negligent, reckless, or intentional acts of other participants</li>
  <li><strong>IN EXTREME CASES, SERIOUS BODILY INJURY, PERMANENT DISABILITY, PARALYSIS, OR DEATH</strong></li>
</ol>

<p>THE CUSTOMER HEREBY VOLUNTARILY ASSUMES ALL RISKS, BOTH KNOWN AND UNKNOWN, FORESEEABLE AND UNFORESEEABLE, associated with participation in and use of the rental equipment, even if arising from the negligence, gross negligence, or fault of the Company or any Released Party (defined below), to the fullest extent permitted by Colorado law.</p>
</div>

<h3>SECTION 11 — WAIVER, RELEASE & COVENANT NOT TO SUE</h3>

<p>In consideration of being permitted to rent and use the equipment and services provided by the Company, <strong>the Customer, on behalf of themselves, their spouse, children, minor dependents, wards, guests, invitees, participants, family members, heirs, next of kin, executors, administrators, personal representatives, successors, and assigns</strong> (collectively, "Releasing Parties"), hereby:</p>

<ol class="list" type="a">
  <li><strong>WAIVES, RELEASES, AND FOREVER DISCHARGES</strong> the Company, its owners, members, managers, officers, directors, employees, agents, contractors, subcontractors, volunteers, insurers, affiliates, parent companies, subsidiaries, successors, and assigns (collectively, "Released Parties") from any and all claims, demands, actions, causes of action, suits, debts, dues, accounts, bonds, covenants, contracts, agreements, judgments, damages (including compensatory, punitive, and consequential), losses, liabilities, costs, expenses (including attorney's fees and court costs), and any and all other obligations of every kind and nature whatsoever, whether now known or unknown, suspected or unsuspected, fixed or contingent, that have arisen, may arise, or may hereafter be discovered, arising out of, connected with, or in any way related to the rental, delivery, setup, use, operation, supervision, maintenance, or removal of any equipment or services provided under this Agreement;</li>
  <li><strong>COVENANTS NOT TO SUE</strong> any Released Party for any claim, loss, damage, or liability arising from or related to the rental equipment or services, regardless of the cause; and</li>
  <li>Acknowledges that this waiver and release extends to claims arising from the <strong>NEGLIGENCE, GROSS NEGLIGENCE, RECKLESSNESS, OR FAULT</strong> of any Released Party, to the maximum extent permitted by the laws of the State of Colorado.</li>
</ol>

<h3>SECTION 12 — INDEMNIFICATION & HOLD HARMLESS</h3>

<p>The Customer agrees to <strong>INDEMNIFY, DEFEND, AND HOLD COMPLETELY HARMLESS</strong> all Released Parties from and against any and all claims, demands, actions, causes of action, suits, judgments, damages (including compensatory, punitive, and consequential), losses, liabilities, penalties, fines, costs, and expenses (including reasonable attorney's fees, expert witness fees, court costs, and costs of investigation and litigation) arising out of or resulting from, directly or indirectly: (a) the Customer's rental, use, misuse, or inability to use the equipment; (b) any breach by the Customer of any term, condition, representation, or warranty in this Agreement; (c) any injury to or death of any person, including any participant, guest, bystander, or third party; (d) any damage to or loss of property; (e) any claim, suit, or proceeding brought by or on behalf of any participant, guest, or third party; or (f) any acts, omissions, negligence, or willful misconduct of the Customer, their agents, guests, invitees, or any participant. This indemnification obligation shall survive the termination or expiration of this Agreement.</p>

<h3>SECTION 13 — PARENTAL/GUARDIAN CONSENT & AUTHORIZATION FOR MINORS</h3>

<p>If any participant or user of the rental equipment is a minor (under eighteen (18) years of age), the individual signing this Agreement represents, warrants, and certifies that they are the Parent or Legal Guardian of said minor(s), or have been duly authorized by the Parent or Legal Guardian to act on their behalf. The signing Parent/Legal Guardian: (a) has read and fully understands all provisions of this Agreement, including the assumption of risk, waiver, release, and indemnification provisions; (b) knowingly and voluntarily consents to the minor(s)' participation in and use of the rental equipment; (c) agrees to all terms of this Agreement on behalf of the minor(s) with full legal authority; (d) accepts full and complete responsibility for the minor(s)' safety, conduct, supervision, and well-being during the rental period; (e) waives, releases, and discharges all claims on behalf of the minor(s) to the same extent as set forth in Sections 10, 11, and 12 herein; and (f) agrees to indemnify and hold harmless all Released Parties from any claim brought by or on behalf of the minor(s).</p>

<h3>SECTION 14 — EMERGENCY MEDICAL AUTHORIZATION</h3>

<p>In the event of a medical emergency involving any participant, the Customer hereby authorizes the Company and its employees or agents to contact emergency medical services (911) and/or seek emergency medical treatment for any injured person if the Customer, Parent/Legal Guardian, or designated emergency contact cannot be reached within a reasonable time. The Customer assumes all responsibility for and agrees to pay all costs, fees, and expenses associated with any emergency medical treatment, ambulance services, hospitalization, or related medical care. The Company is not responsible for any medical decisions made in an emergency, nor for any medical expenses, complications, or outcomes resulting from injuries sustained during the use of rental equipment.</p>

<h3>SECTION 15 — PHOTOGRAPH, VIDEO & MEDIA RELEASE</h3>

<p>The Customer grants the Company a non-exclusive, royalty-free, perpetual, irrevocable, worldwide license to photograph, film, record, and otherwise capture images and likenesses of the event, participants, and setup for use in marketing, advertising, social media, website content, print materials, and promotional purposes. The Customer waives any right to compensation, inspection, approval, or claim for invasion of privacy related to such use. If the Customer wishes to opt out of this media release, written notice must be provided to the Company at least forty-eight (48) hours prior to the event date.</p>

<h3>SECTION 16 — LIMITATION OF LIABILITY</h3>

<p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY'S TOTAL LIABILITY TO THE CUSTOMER, REGARDLESS OF THE FORM OF ACTION (WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE), EXCEED THE TOTAL AMOUNT PAID BY THE CUSTOMER TO THE COMPANY FOR THE SPECIFIC RENTAL GIVING RISE TO THE CLAIM. IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>

<h3>SECTION 17 — GOVERNING LAW, JURISDICTION & DISPUTE RESOLUTION</h3>

<p>This Agreement shall be governed by, construed, and enforced in accordance with the laws of the State of Colorado, without regard to its conflict of law principles. Any dispute, claim, or controversy arising out of or relating to this Agreement shall first be submitted to good-faith mediation in Denver, Colorado. If mediation is unsuccessful, the dispute shall be resolved exclusively in the state or federal courts located in the City and County of Denver, Colorado, and each party irrevocably consents to the personal jurisdiction and venue of such courts. The prevailing party in any legal action or proceeding shall be entitled to recover its reasonable attorney's fees, expert witness fees, court costs, and other expenses of litigation from the non-prevailing party.</p>

<h3>SECTION 18 — SEVERABILITY & SURVIVAL</h3>

<p>If any provision of this Agreement is found to be invalid, illegal, void, or unenforceable by a court of competent jurisdiction, such finding shall not affect the validity or enforceability of the remaining provisions, which shall continue in full force and effect. Any invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the Parties' original intent to the greatest extent possible. The waiver, release, indemnification, assumption of risk, and limitation of liability provisions shall survive the termination or expiration of this Agreement.</p>

<h3>SECTION 19 — ENTIRE AGREEMENT & MODIFICATION</h3>

<p>This Agreement constitutes the entire agreement between the Parties regarding the subject matter hereof and supersedes all prior or contemporaneous written or oral agreements, representations, warranties, and understandings. No amendment, modification, or supplement to this Agreement shall be valid or binding unless made in writing and signed by authorized representatives of both Parties. No waiver of any provision shall be deemed a waiver of any other provision or of the same provision on any future occasion.</p>

<div class="highlight-box">
<p class="important" style="text-align:center; font-size: 11pt;">ACKNOWLEDGMENT & ELECTRONIC SIGNATURE</p>
<p>BY SUBMITTING THE BOOKING FORM AND CHECKING THE AGREEMENT CHECKBOX ON THE FIESTA FUN FAMILIA WITH TRINITY WEBSITE, I ACKNOWLEDGE AND AGREE THAT:</p>
<ol class="list">
  <li>I have carefully read, fully understand, and voluntarily agree to ALL provisions of this Agreement, including the ASSUMPTION OF RISK, WAIVER AND RELEASE OF LIABILITY, INDEMNIFICATION, and all other terms.</li>
  <li>I understand that this Agreement is a LEGALLY BINDING CONTRACT and that I am GIVING UP SUBSTANTIAL LEGAL RIGHTS, including the right to sue the Company for injuries or damages.</li>
  <li>I am signing this Agreement freely and voluntarily, without any inducement, assurance, or guarantee, and intend my electronic acceptance to be the legal equivalent of my handwritten signature.</li>
  <li>I am at least eighteen (18) years of age and legally competent to enter into this Agreement.</li>
  <li>If I am the Parent or Legal Guardian of any minor participant, I have the legal authority to enter into this Agreement on their behalf and accept all terms on their behalf.</li>
  <li>I have had the opportunity to consult with an attorney before signing this Agreement and have either done so or voluntarily chosen not to.</li>
  <li>My electronic acceptance, including the IP address, timestamp, and browser information recorded at the time of submission, constitutes a valid and enforceable electronic signature under the Colorado Uniform Electronic Transactions Act (C.R.S. § 24-71.3-101 et seq.) and the federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. § 7001 et seq.).</li>
</ol>
</div>

<div class="signature-block">
  <div class="sig-row">
    <div class="sig-col">
      <div class="value" style="border-bottom: 1px solid #333; padding-bottom: 4pt; min-height: 20pt; font-weight: bold;">${data.customerName || ''}</div>
      <div class="sig-label">Customer / Parent / Legal Guardian Name (Printed)</div>
    </div>
    <div class="sig-col">
      <div class="value" style="border-bottom: 1px solid #333; padding-bottom: 4pt; min-height: 20pt;">${data.signatureDate}</div>
      <div class="sig-label">Date</div>
    </div>
  </div>
  <div class="sig-row">
    <div class="sig-col">
      <div class="sig-line">&nbsp;</div>
      <div class="sig-label">Signature (if printing this document)</div>
    </div>
    <div class="sig-col">
      <div class="value" style="border-bottom: 1px solid #333; padding-bottom: 4pt; min-height: 20pt;">Electronically agreed via website submission</div>
      <div class="sig-label">Electronic Signature Confirmation</div>
    </div>
  </div>
</div>

<div class="footer">
  <p><strong>FIESTA FUN FAMILIA WITH TRINITY</strong> — Denver, Colorado</p>
  <p>Phone: (303) 295-3886 | Email: jordyo3728@gmail.com | Instagram: @jordy37 | Facebook: Jordy Ortiz</p>
  <p>This document was generated on ${data.signatureDate} and constitutes a legally binding agreement.</p>
  <p>Please retain a copy of this document for your records.</p>
</div>

<button class="btn-print no-print" onclick="window.print()">🖨️ Print / Save as PDF</button>

</body>
</html>`;
}

export function downloadWaiver(data: WaiverData) {
  const html = generateWaiverHTML(data);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.onload = () => {
      URL.revokeObjectURL(url);
    };
  }
}
