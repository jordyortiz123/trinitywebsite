import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms, Conditions & Liability Waiver | Fiesta Fun Familia with Trinity",
  description: "Rental agreement, terms of service, liability waiver, and policies for Fiesta Fun Familia with Trinity party rentals in Denver, CO.",
};

export default function TermsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-fiesta-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Terms, Conditions & Liability Waiver
          </h1>
          <p className="text-white/70">
            Términos, Condiciones y Exención de Responsabilidad
          </p>
        </div>
      </section>

      <section className="py-16 bg-fiesta-cream">
        <div className="max-w-3xl mx-auto px-4 space-y-8">

          {/* RENTAL AGREEMENT */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-fiesta-yellow/20">
            <h2 className="text-2xl font-extrabold text-fiesta-teal mb-6 border-b border-fiesta-yellow/20 pb-3">
              RENTAL AGREEMENT & TERMS OF SERVICE
            </h2>

            <div className="space-y-8 text-sm leading-relaxed text-fiesta-teal/80">

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">1. PARTIES & AGREEMENT</h3>
                <p>
                  This Rental Agreement (&quot;Agreement&quot;) is entered into between Fiesta Fun Familia with
                  Trinity (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a party rental service operating in
                  Denver, Colorado, and the individual or entity renting equipment (&quot;Customer,&quot; &quot;Renter,&quot;
                  &quot;you,&quot; or &quot;your&quot;). By booking, reserving, or using any equipment or services provided
                  by the Company, you acknowledge that you have read, understood, and agree to be bound
                  by the terms and conditions set forth in this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">2. RENTAL INVENTORY, PERIODS & PRICING</h3>
                <p className="mb-3">
                  All rentals are subject to availability and must be confirmed by the Company prior to the
                  event date. Standard rental pricing is as follows and is subject to change without notice:
                </p>
                <div className="bg-fiesta-cream rounded-xl p-4 space-y-3">
                  <div className="border-b border-fiesta-yellow/20 pb-3">
                    <p className="font-semibold text-fiesta-teal">Bouncy Castles / Brincolines</p>
                    <p>$25.00 per hour for the first 4 hours (small unit) | $50.00 per hour for the first 4 hours (large unit). Full-day rates available upon request. Two (2) units available.</p>
                  </div>
                  <div className="border-b border-fiesta-yellow/20 pb-3">
                    <p className="font-semibold text-fiesta-teal">Water Slides / Toboganes de Agua</p>
                    <p>$150.00 per day with a minimum rental period of four (4) hours. Two (2) units available. Water slides are designated water equipment; bouncy castles are NOT authorized for water use.</p>
                  </div>
                  <div className="border-b border-fiesta-yellow/20 pb-3">
                    <p className="font-semibold text-fiesta-teal">Cotton Candy Machine / Máquina de Algodón de Azúcar</p>
                    <p>$50.00 per day for machine rental. Additional $50.00 for flavor kit (includes four (4) different flavors and supplies). Total with flavors: $100.00.</p>
                  </div>
                  <div className="border-b border-fiesta-yellow/20 pb-3">
                    <p className="font-semibold text-fiesta-teal">Photo Booth / Cabina de Fotos</p>
                    <p>Pricing available upon request. Includes backdrop, props, and digital copies. Additional prints available for purchase.</p>
                  </div>
                  <div className="border-b border-fiesta-yellow/20 pb-3">
                    <p className="font-semibold text-fiesta-teal">Tables & Chairs / Mesas y Sillas</p>
                    <p>Pricing provided upon request based on quantity and duration. Five to ten (5-10) tables and ten (10+) chairs available. Additional inventory can be arranged with advance notice.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-fiesta-teal">Portable Sound System / Sistema de Sonido Portátil</p>
                    <p>Pricing provided upon request based on event duration and equipment requirements.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">3. BOOKING, DEPOSIT & PAYMENT</h3>
                <p>
                  A non-refundable deposit may be required at the time of booking to secure the reservation.
                  The deposit amount will be communicated at the time of booking and will be applied toward
                  the total rental cost. The remaining balance is due in full on or before the date of the event,
                  prior to setup of equipment. The Company accepts cash, credit/debit cards, and other
                  electronic payment methods as communicated at the time of booking. A valid credit card
                  must be kept on file for the duration of the rental period to cover potential additional charges,
                  including but not limited to cleaning fees, damage fees, and extended rental time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">4. DELIVERY, SETUP & REMOVAL</h3>
                <p>
                  Complimentary delivery, setup, and removal are included for locations within the Denver
                  metropolitan area. Additional delivery fees may apply for locations outside the standard
                  service area, to be communicated prior to booking confirmation. The Customer is responsible
                  for ensuring adequate space, ground surface, and access for delivery, setup, and safe operation
                  of all rental equipment. The Company reserves the right to refuse setup if conditions are
                  deemed unsafe, including but not limited to: uneven terrain, insufficient space, severe weather
                  conditions, proximity to power lines or other hazards, or any condition that in the Company&apos;s
                  sole discretion poses a risk to participants or equipment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">5. EQUIPMENT CARE, USE & SUPERVISION</h3>
                <p>
                  The Customer assumes full responsibility for the care, supervision, and proper use of all
                  rented equipment during the entire rental period, from the time of setup completion to the
                  time of scheduled removal. Competent adult supervision (18 years of age or older) is REQUIRED
                  at all times when minors are using any inflatable equipment, including bouncy castles and water
                  slides. The Customer shall ensure that all equipment is used in accordance with the safety
                  guidelines provided by the Company, including but not limited to: maximum occupancy limits,
                  age and weight restrictions, proper footwear requirements, and weather-related precautions.
                  Failure to provide adequate supervision or adherence to safety guidelines may result in
                  immediate termination of the rental without refund.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">6. CLEANING & DISINFECTION FEES</h3>
                <p>
                  All equipment is delivered in a clean, sanitized, and inspected condition. The Customer shall
                  return equipment in substantially the same condition as received, allowing for normal and
                  reasonable use. If equipment requires additional cleaning beyond normal use, applicable fees
                  will be charged. <strong>Unauthorized use of water with bouncy castles</strong> (which are NOT designated
                  as water slides), including but not limited to: spraying water on or inside the unit, attaching
                  hoses, using water balloons, or any other introduction of water or liquid, <strong>will result in a
                  mandatory cleaning and disinfection fee of One Hundred Dollars ($100.00)</strong> to cover
                  professional sanitization, thorough drying, airing out, and mold/mildew prevention treatment
                  of the equipment. This fee will be charged to the credit card on file without further notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">7. DAMAGE, LOSS & REPAIR</h3>
                <p>
                  The Customer is financially responsible for any and all damage to rental equipment beyond
                  normal wear and tear, including but not limited to: tears, punctures, stains, burns, structural
                  damage, theft, or loss. Damage will be assessed by the Company upon inspection of returned
                  equipment. <strong>Damage assessment fees of up to Five Hundred Dollars ($500.00) may be charged
                  to the credit card on file</strong>, or Three Hundred Dollars ($300.00) if an alternative payment arrangement
                  is agreed upon in advance. For damages exceeding these amounts, the Customer will be invoiced
                  for the full cost of repair or replacement. The Company reserves the right to pursue legal remedies
                  for the collection of any unpaid charges.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">8. CANCELLATION & REFUND POLICY</h3>
                <p>
                  Cancellations made seventy-two (72) hours or more before the scheduled event will receive a
                  full refund of any payments made, excluding the non-refundable deposit. Cancellations made
                  between forty-eight (48) and seventy-two (72) hours before the event will receive a 50% refund
                  of payments made, excluding the deposit. Cancellations made within forty-eight (48) hours of
                  the event are non-refundable. Weather-related cancellations will be handled on a case-by-case
                  basis at the Company&apos;s discretion. The Company will make reasonable efforts to reschedule
                  events affected by weather conditions, subject to availability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">9. FORCE MAJEURE</h3>
                <p>
                  The Company shall not be liable for any failure to perform its obligations under this Agreement
                  if such failure results from circumstances beyond the Company&apos;s reasonable control, including
                  but not limited to: acts of God, natural disasters, severe weather, epidemics, pandemics,
                  government orders, civil unrest, labor disputes, equipment failure due to external causes,
                  or any other event beyond reasonable anticipation or control.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-fiesta-teal mb-3">10. GOVERNING LAW & JURISDICTION</h3>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of the State
                  of Colorado, without regard to its conflict of law provisions. Any disputes arising under or
                  related to this Agreement shall be resolved exclusively in the courts of the City and County
                  of Denver, State of Colorado. The prevailing party in any legal action shall be entitled to
                  recover reasonable attorney&apos;s fees and costs.
                </p>
              </div>
            </div>
          </div>

          {/* LIABILITY WAIVER */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-2 border-fiesta-red/30">
            <h2 className="text-2xl font-extrabold text-fiesta-red mb-2 border-b border-fiesta-red/20 pb-3">
              LIABILITY WAIVER & ASSUMPTION OF RISK
            </h2>
            <p className="text-xs text-fiesta-red/60 mb-6 uppercase tracking-wide font-semibold">
              PLEASE READ CAREFULLY — THIS DOCUMENT AFFECTS YOUR LEGAL RIGHTS
            </p>

            <div className="space-y-6 text-sm leading-relaxed text-fiesta-teal/80">

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">ACKNOWLEDGMENT OF RISK</h3>
                <p>
                  The Customer and/or Parent/Legal Guardian acknowledges and understands that the use of
                  inflatable equipment (bouncy castles, water slides, and similar devices), photo booth equipment,
                  and other party rental equipment involves inherent risks of physical injury, including but not
                  limited to: falls, collisions, sprains, fractures, concussions, lacerations, and in rare cases,
                  serious bodily harm or death. By signing this waiver or proceeding with the rental, the Customer
                  voluntarily assumes all risks associated with the use of the rented equipment, whether known
                  or unknown, foreseeable or unforeseeable.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">WAIVER & RELEASE OF LIABILITY</h3>
                <p>
                  In consideration of being permitted to rent and use the equipment provided by Fiesta Fun Familia
                  with Trinity, the Customer, on behalf of themselves, their children, minor dependents, guests,
                  invitees, family members, heirs, executors, administrators, and assigns, hereby WAIVES, RELEASES,
                  AND FOREVER DISCHARGES the Company, its owners, officers, directors, employees, agents,
                  contractors, affiliates, successors, and assigns (collectively, &quot;Released Parties&quot;) from any
                  and all claims, demands, causes of action, suits, judgments, damages, losses, liabilities, costs,
                  and expenses (including attorney&apos;s fees) of every kind and nature, whether known or unknown,
                  arising out of or in any way related to:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
                  <li>The use, misuse, or inability to use the rented equipment</li>
                  <li>Any personal injury, bodily harm, illness, or death</li>
                  <li>Any property damage or loss</li>
                  <li>Any negligence, whether active or passive, on the part of the Released Parties</li>
                  <li>Any defect in the equipment, whether latent or patent</li>
                  <li>The acts or omissions of other participants, guests, or third parties</li>
                  <li>Any food-related allergies or reactions from cotton candy or other consumables</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">INDEMNIFICATION</h3>
                <p>
                  The Customer agrees to INDEMNIFY, DEFEND, AND HOLD HARMLESS the Released Parties from
                  and against any and all claims, damages, losses, liabilities, costs, and expenses (including
                  reasonable attorney&apos;s fees and court costs) arising out of or resulting from: (a) the Customer&apos;s
                  use of the rental equipment; (b) the Customer&apos;s breach of any term of this Agreement; (c) any
                  injury or damage to any person or property caused by the Customer, their guests, or invitees;
                  or (d) any claim brought by a third party arising from the Customer&apos;s event or use of the equipment.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">PARENTAL/GUARDIAN CONSENT FOR MINORS</h3>
                <p>
                  If any participant is under the age of eighteen (18), the Parent or Legal Guardian signing this
                  Agreement represents and warrants that they have legal authority to act on behalf of the minor(s)
                  and hereby consents to the minor(s)&apos; participation and use of the rental equipment. The Parent
                  or Legal Guardian agrees to all terms of this Agreement on behalf of the minor(s) and accepts
                  full responsibility for the minor(s)&apos; safety, supervision, and conduct during the rental period.
                  The Parent or Legal Guardian further agrees to the waiver, release, and indemnification provisions
                  set forth herein on behalf of the minor(s).
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">MEDICAL AUTHORIZATION</h3>
                <p>
                  In the event of an emergency, the Customer authorizes the Company to seek emergency medical
                  treatment for any participant if the Customer or designated emergency contact cannot be reached.
                  The Customer assumes all costs associated with such emergency medical treatment. The Company
                  is not responsible for any medical expenses incurred as a result of injuries sustained during the
                  use of rental equipment.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">PHOTO & MEDIA RELEASE</h3>
                <p>
                  The Customer grants the Company permission to use photographs, videos, and other media captured
                  during the event for marketing, advertising, social media, and promotional purposes unless the
                  Customer explicitly opts out in writing prior to the event date.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">COVENANT NOT TO SUE</h3>
                <p>
                  The Customer, on behalf of themselves, their spouse, children, minor dependents, guests, invitees,
                  heirs, next of kin, executors, administrators, personal representatives, successors, and assigns,
                  COVENANTS NOT TO SUE any Released Party for any claim, loss, damage, or liability arising from
                  or related to the rental equipment or services, regardless of the cause, including claims arising
                  from the NEGLIGENCE, GROSS NEGLIGENCE, RECKLESSNESS, OR FAULT of any Released Party,
                  to the maximum extent permitted by the laws of the State of Colorado.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">LIMITATION OF LIABILITY</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY&apos;S
                  TOTAL LIABILITY TO THE CUSTOMER, REGARDLESS OF THE FORM OF ACTION (WHETHER IN CONTRACT,
                  TORT, STRICT LIABILITY, OR OTHERWISE), EXCEED THE TOTAL AMOUNT PAID BY THE CUSTOMER TO
                  THE COMPANY FOR THE SPECIFIC RENTAL GIVING RISE TO THE CLAIM. IN NO EVENT SHALL THE COMPANY
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
                  DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                  INTANGIBLE LOSSES.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">ELECTRONIC SIGNATURE ACKNOWLEDGMENT</h3>
                <p>
                  By submitting the booking form and checking the agreement checkbox on the Fiesta Fun Familia
                  with Trinity website, the Customer acknowledges that their electronic acceptance constitutes
                  a valid and enforceable electronic signature under the Colorado Uniform Electronic Transactions
                  Act (C.R.S. § 24-71.3-101 et seq.) and the federal Electronic Signatures in Global and National
                  Commerce Act (E-SIGN Act, 15 U.S.C. § 7001 et seq.). The Customer&apos;s IP address, timestamp,
                  and browser information are recorded at the time of submission as evidence of acceptance.
                  The Customer has had the opportunity to consult with an attorney before agreeing and has either
                  done so or voluntarily chosen not to.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">SEVERABILITY & SURVIVAL</h3>
                <p>
                  If any provision of this Agreement is found to be invalid, illegal, void, or unenforceable by a court
                  of competent jurisdiction, such finding shall not affect the validity or enforceability of the remaining
                  provisions, which shall continue in full force and effect. Any invalid provision shall be modified to
                  the minimum extent necessary to make it valid and enforceable while preserving the Parties&apos; original
                  intent. The waiver, release, indemnification, assumption of risk, covenant not to sue, and limitation
                  of liability provisions shall survive the termination or expiration of this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-fiesta-teal mb-2">ENTIRE AGREEMENT</h3>
                <p>
                  This Agreement constitutes the entire agreement between the Parties regarding the subject matter
                  hereof and supersedes all prior or contemporaneous written or oral agreements, representations,
                  warranties, and understandings. No amendment, modification, or supplement to this Agreement shall
                  be valid or binding unless made in writing and signed by authorized representatives of both Parties.
                  No waiver of any provision shall be deemed a waiver of any other provision or of the same provision
                  on any future occasion.
                </p>
              </div>

              <div className="bg-fiesta-red/5 rounded-xl p-5 border border-fiesta-red/20 mt-6">
                <p className="font-bold text-fiesta-red text-sm mb-2">
                  BY PROCEEDING WITH THE BOOKING, YOU ACKNOWLEDGE THAT:
                </p>
                <ul className="text-sm text-fiesta-teal/80 space-y-2">
                  <li>✓ You have read this entire Agreement and Liability Waiver</li>
                  <li>✓ You understand the risks involved in using inflatable and party equipment</li>
                  <li>✓ You voluntarily assume all risks and release the Company from liability</li>
                  <li>✓ You have the legal authority to enter into this Agreement</li>
                  <li>✓ You agree to all terms including pricing, fees, and policies stated herein</li>
                  <li>✓ If signing on behalf of minor(s), you are the Parent or Legal Guardian</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-yellow/20 text-center">
            <p className="text-sm text-fiesta-teal/60 mb-2">
              Questions about our terms? / ¿Preguntas sobre nuestros términos?
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="tel:303-295-3886" className="text-fiesta-orange hover:underline font-medium">📞 303-295-3886</a>
              <a href="mailto:jordyo3728@gmail.com" className="text-fiesta-orange hover:underline font-medium">📧 jordyo3728@gmail.com</a>
            </div>
            <p className="text-xs text-fiesta-teal/40 mt-4">
              Last updated: {new Date().getFullYear()}. Fiesta Fun Familia with Trinity reserves the right to modify these terms at any time.
              Continued use of our services constitutes acceptance of any modifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
