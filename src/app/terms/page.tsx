import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fiesta Fun Familia with Trinity",
  description: "Rental terms, conditions, and policies for Fiesta Fun Familia with Trinity party rentals in Denver, CO.",
};

export default function TermsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-fiesta-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-white/70">
            Términos y Condiciones
          </p>
        </div>
      </section>

      <section className="py-16 bg-fiesta-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-fiesta-yellow/20 prose prose-sm max-w-none">

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">1. Rental Agreement</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              By renting equipment from Fiesta Fun Familia with Trinity (&quot;the Company&quot;), the
              customer agrees to the following terms and conditions. All rental agreements are
              subject to equipment availability and confirmation by the Company.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">2. Rental Periods & Pricing</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-2">
              Standard rental pricing is as follows:
            </p>
            <ul className="text-fiesta-teal/70 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Bouncy Castles: $25 per hour for the first 4 hours. Full day rates available upon request.</li>
              <li>Water Slides: $150 per day with a minimum rental period of 2 hours.</li>
              <li>Cotton Candy Machine: $100 per day.</li>
              <li>Tables, Chairs, and Sound Systems: Pricing provided upon request based on quantity and duration.</li>
            </ul>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">3. Delivery & Setup</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              Free delivery and setup is included for locations within the Denver metropolitan area.
              Additional fees may apply for locations outside the standard service area. The customer
              must ensure adequate space and access for delivery, setup, and operation of rental equipment.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">4. Equipment Care & Responsibility</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              The customer is responsible for the care and supervision of all rented equipment during
              the rental period. Equipment must be used in accordance with the provided safety
              guidelines. Adult supervision is required at all times when children are using inflatable
              equipment.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">5. Cleaning & Maintenance Fees</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              All equipment is delivered clean and sanitized. If equipment requires additional
              cleaning beyond normal use, fees may apply. Unauthorized use of water with bouncy
              castles (not designated as water slides) or any tampering with water systems will
              result in a cleaning and disinfectant fee of $100 to cover sanitization, drying, and
              airing out of the equipment.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">6. Damage Policy</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              The customer is responsible for any damage to rental equipment beyond normal wear
              and tear. Damage fees are assessed based on the extent of repair or replacement
              required. A credit card on file or deposit may be required at the time of booking
              to cover potential damages. Damage assessment fees may apply as determined by
              the Company upon inspection of returned equipment.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">7. Liability</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              The customer assumes all liability for the use of rented equipment. The customer
              agrees to hold harmless Fiesta Fun Familia with Trinity, its owners, employees,
              and agents from any claims, damages, or injuries arising from the use of rental
              equipment. A liability acknowledgment may be required at the time of rental.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">8. Cancellation Policy</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              Cancellations made 48 hours or more before the scheduled event will receive a full
              refund. Cancellations made within 48 hours of the event may be subject to a
              cancellation fee. Weather-related cancellations will be handled on a case-by-case
              basis, and the Company will work with customers to reschedule when possible.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">9. Payment</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-6">
              A deposit may be required to confirm a booking. The remaining balance is due on
              or before the day of the event. We accept various forms of payment — please inquire
              for details.
            </p>

            <h2 className="text-xl font-bold text-fiesta-teal mb-4">10. Contact</h2>
            <p className="text-fiesta-teal/70 text-sm leading-relaxed mb-4">
              For questions about these terms or to discuss your rental needs:
            </p>
            <ul className="text-fiesta-teal/70 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Phone: 303-295-3886</li>
              <li>Email: jordyo3728@gmail.com</li>
              <li>Instagram: @jordy37</li>
              <li>Facebook: Jordy Ortiz</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-fiesta-yellow/20">
              <p className="text-fiesta-teal/40 text-xs">
                These terms and conditions are subject to change. Last updated: {new Date().getFullYear()}.
                Fiesta Fun Familia with Trinity reserves the right to modify these terms at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
