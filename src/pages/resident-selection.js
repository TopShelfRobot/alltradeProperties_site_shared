import React from 'react'
import cn from 'classnames'

import Layout from '../components/layout'
import Container from '../components/container'

import './resident-selection.scss'

export default class ResidentSelectionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'ky',
    }
  }

  isActive = name => name === this.state.active

  handleClick = active => () => this.setState({ active })

  render() {
    return (
      <Layout pageTitle="Resident Selection Guidelines">
        <Container className="py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <div className={cn('nav-link', { active: this.isActive('ky') })} onClick={this.handleClick('ky')}>
                Kentucky/Indiana
              </div>
            </li>
            <li className="nav-item">
              <div className={cn('nav-link', { active: this.isActive('nc') })} onClick={this.handleClick('nc')}>
                North Carolina
              </div>
            </li>
          </ul>

          <article className={cn('resident-selection', 'card', { 'd-none': !this.isActive('ky') })}>
            <h1>Resident Selection Guidelines - Kentucky/Indiana - Revised 6/22/2019</h1>
            <p>
              Alltrade Property Management is a property management company dedicated to providing quality housing to
              its residents by managing the property in an efficient and diligent manner. It is the policy of Alltrade
              Property Management to provide housing on an equal opportunity basis. We do not discriminate on any basis
              including, but not limited to race, religion, color, sex, familial status, national origin, handicap,
              disability or sexual orientation.
            </p>

            <h3>Application Process:</h3>

            <ol>
              <li>
                If an applicant seeks reconsideration within thirty (30) days of denial, no additional application fee
                will be due but additional time may be needed to process the application.
              </li>
              <li>
                While Alltrade accepts written applications, to expedite the process, Alltrade prefers applicants to
                file applications online through Alltrade’s website: alltradeproperties.com
              </li>
              <li>
                Alltrade will not waive application fees upon request from any individual or organization. Application
                fees will only be waived if there is a publicly advertised special waiving application fees.
              </li>
            </ol>

            <h3>Application Submission</h3>

            <ol>
              <li>
                A rental application is not considered complete until it has been signed and all required documentation
                has been submitted.
              </li>
              <li>
                An applicant must answer all questions on the form completely and honestly. Incomplete applications will
                not be processed.
              </li>
              <li>
                Alltrade will verify your household’s income, employment, check your credit report through AmRent or
                other similar service, perform background check and verify there are no disqualifying factors. If
                necessary, Alltrade may verify employment and/or rental history.
              </li>
              <li>
                If any of the verifications do not confirm that you meet Alltrade’s criteria, Alltrade will decline your
                application.
              </li>
              <li>
                We will strive to process all applications within two business days, provided we have received all
                required application documentation. However, it may take up to several days depending on how quickly
                Alltrade is able to verify the information you have provided.
              </li>
              <li>
                If an application is denied, an applicant will be notified in writing and will be provided the reason(s)
                that the application was denied.
              </li>
              <li>
                All applicants have a right to a copy of their screening results for up to 60 days after the time of
                screening. Applicants must obtain this report from the screening provider directly.
              </li>
            </ol>

            <h3>Approved and Conditional Applications</h3>

            <ol>
              <li>
                Alltrade will accept a security deposit to reserve a unit from the first qualified applicant with a
                conditional or approved application. The first security deposit received will reserve the unit.
              </li>
              <li>
                Alltrade will continue to accept and process applications on a unit until a security deposit is
                received.
              </li>
              <li>
                Once an applicant is accepted, the security deposit is due immediately to secure the unit. At that time,
                a move in date is scheduled.
              </li>
              <li>
                Deposits are non-refundable to residents who opt not to take a unit. An applicant will sign a document
                indicating that the deposit is not refundable if the applicant does not sign a lease and/or take
                possession of the unit.
              </li>
              <li>
                If an application is found to fall within the range determined to be conditional, an applicant may be
                counteroffered arrangements including a higher security deposit, the addition of a qualified co-signer,
                or an alternative unit which fits the rent to income ration criteria.
              </li>
            </ol>

            <h3>Application Screening Criteria</h3>
            <p>
              Screening criteria will be applied consistently to all applicants. Consideration of extenuating
              circumstances will be considered in the screening process, but must be approved by a Regional Manager.
            </p>

            <p>
              All applications will be reviewed to make sure the applicants meet Alltrade’s criteria for each of the
              following:
            </p>
            <div style={{ paddingLeft: 20 }}>
              <ol>
                <li>Income/Debt;</li>
                <li>Credit history;</li>
                <li>Criminal history; and</li>
                <li>No other automatic disqualifiers.</li>
              </ol>
            </div>

            <h3>Income/Debt</h3>

            <ol>
              <li>
                For conventional properties, Alltrade will evaluate the application based on the combined net household
                income (take home pay) of the applicants.
                <ol>
                  <li>
                    For Low Income Housing Tax Credit properties, Alltrade will evaluate the application based on the
                    combined <strong>gross</strong> household income of the applicants and in accordance with Federal,
                    State and Local income guidelines.
                  </li>
                </ol>
              </li>
              <li>
                An applicant’s <strong>net</strong> income must be at least three (3) times the rental amount on the
                requested unit. This is called the rent to income ratio and is calculated by dividing the income by the
                rent. For example, if a person is applying for a conventional apartment renting for $500.00 and makes
                $1,600.00 take home pay, the rent to income ratio is $1,600.00/$500.00 = 3.2.
                <ol>
                  <li>
                    For Low Income Housing Tax Credit properties, the rent to income ratio is determined based using{' '}
                    <strong>gross</strong> household income.
                  </li>
                </ol>
              </li>
              <li>
                If an applicant has a rent to income ratio of 2.5 – 2.99, the applicant will be considered conditional
                and must complete a landlord verification.
              </li>
              <li>
                An applicant with less than a 2.5 rent to income ratio will be denied unless the applicant has a housing
                voucher or other stable and documentable rental assistance that covers the duration of the lease. These
                instances must be approved by a Regional Manager.
              </li>
            </ol>

            <h3>Credit History</h3>
            <p>
              Priority will be given to current credit activity over older credit activity. All rental obligations and
              utilities must be paid in full. Medical bills and student loans will not be considered when examining
              credit history. Lack of credit history is not an automatic disqualification.
            </p>

            <h3>Automatic Credit History Disqualifiers:</h3>
            <ol>
              <li>Any open bankruptcy or any bankruptcy within the previous three (3) years;</li>
              <li>Any unpaid apartment collection or previous rent;</li>
              <li>Inability to put utilities in the applicant’s name;</li>
              <li>
                Any eviction judgement within the last seven (7) years. Documentation from a plaintiff in an eviction
                action confirming the eviction was dismissed and all debts were paid will be taken into consideration
                when processing the application.
              </li>
              <li>
                Any false or misleading information provided by an applicant on the written application, or omission of
                a material fact.
              </li>
              <li>
                Records of destruction, consistent late or unpaid rental obligations, evictions, police activity or poor
                housekeeping habits resulting in health and safety hazards are grounds for rejection.
              </li>
              <li> Credit scores of 500 or less</li>
              <li>Credit scores between 501 and 549 are considered conditional</li>
            </ol>

            <h3>Criminal History Admissions Criteria</h3>
            <p>
              Alltrade has established a policy to reject all applications where the applicant or any household member
              has been convicted of certain criminal activity. For all applications considered conditional, Alltrade
              staff will conduct an individualized assessment. Applicants have a right to request a reasonable
              accommodation. Applicants may submit with the application evidence of mitigating circumstances, if the
              admissions criteria provides for an individualized assessment of the applicant’s specific criminal
              activity. The activities that will be grounds for rejection of an application are as follows:
            </p>
            <ol>
              <li>
                Any felony conviction or adjudication other than acquittal within ten (10) years, which involved drunk
                driving, burglary, robbery or serious crime of against a person or property.
              </li>
              <li>
                Any conviction or adjudication other than acquittal within five (5) years for any acts of perpetrating
                domestic violence.
              </li>
              <li>
                Any conviction or adjudication other than acquittal within three (3) years for the sale, distribution or
                manufacture of any controlled or illegal substance other than marijuana.
              </li>
              <li>
                Any conviction or adjudication other than acquittal within three (3) years involving illegal use or
                possession of any controlled or illegal substance other than marijuana.
              </li>
              <li>
                Any conviction or adjudication other than acquittal, for any sexual offense. If during the applicant’s
                lease Alltrade discovers anyone in the household has been placed on the sex offender registry; legal
                proceedings will begin to terminate the tenancy.
              </li>
              <li>Any conviction or adjudication other than acquittal, which involved bodily harm to a child.</li>
              <li>Lifetime sex offenders.</li>
            </ol>

            <h3>Occupancy Standards</h3>
            <p>
              Our goal is to prevent overcrowding and undue wear and tear to rental properties. Alltrade will abide by
              the state occupancy standards regarding square footage relative to the number of people who may reside in
              a property. We use the general guidelines below. However, applicants have a right to request a reasonable
              accommodation.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Bedroom Size</th>
                  <th>Maximum persons per household</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>

            <h3>Co-Signers</h3>
            <p>
              If an applicant does not meet one or more of the above criteria, they may still be eligible for a rental
              unit if they can get a third-party to guarantee the lease. “Co-signers or “Guarantors” must be related to
              at least one of the applicants. It is preferable that co-signers reside in the same state as the
              applicants. The co-signer must submit a written application along with the application fee and must pass
              the criteria of the screening process as any other applicant. The income to rent ratio must be (six) 6
              times the rent. If the co-signer cannot come to an Alltrade office in person, the signed application must
              be notarized. All co-signers must be approved by a Regional Manager. A co-signer will be a leaseholder and
              will be required to sign a lease agreement and uphold all obligations outlined in the lease. If the
              co-signer cannot come to an Alltrade office in person, the signed lease must be notarized.
            </p>

            <h3>Refugee Status</h3>
            <p>
              Applicants who have refugee status and/or are receiving case management services and/or rental assistance
              through a recognized social service agency will not be required to submit an application. We will require
              a copy of each family member’s I-9 at the time of arrival in the unit.
            </p>

            <h3>Appeals and Grievances</h3>
            <p>
              If anyone believes that an act of discrimination has occurred, please refer to Alltrade’s Grievance Policy
              found on Alltrade’s website. You may submit your grievance in writing or send a request for a copy of
              Alltrade’s Grievance Policy to info@alltradeproperties.com.
            </p>
            <p>
              Applicants who are denied will be allotted fourteen (14) days to dispute the denial. To dispute the denial
              of an application, the applicant must submit the dispute in writing or request a meeting in writing within
              14 days.
            </p>
          </article>

          <article className={cn('resident-selection', 'card', { 'd-none': !this.isActive('nc') })}>
            <h1>Resident Selection Guidelines - North Carolina</h1>
            <p>
              Alltrade Property Management is a property management company dedicated to providing quality housing to
              its residents by managing the property in an efficient and diligent manner.
            </p>
            <p>
              It is the policy of Alltrade Property Management to provide housing on an equal opportunity basis. We do
              not discriminate on any basis including, but not limited to race, religion, color, sex, familial status,
              national origin, handicap, disability or sexual orientation. If anyone believes that an act of
              discrimination has occurred or is going to occur, please report to Alltrade management immediately.
            </p>

            <h2>APPLICATION PROCESS:</h2>

            <h3>Fees:</h3>

            <ol>
              <li>
                Applications are $35 for the first adult (any person over the age of 18) and $15 for each additional
                adult.
              </li>
              <li>Application fees are non-refundable.</li>
              <li>
                If an applicant seeks reconsideration within thirty (30) days of denial, no additional application fee
                will be due but additional time may be needed to process the application.
              </li>
              <li>
                While Alltrade accepts written applications, to expedite the process, Alltrade prefers applicants to
                file applications online.
              </li>
            </ol>

            <h3>Required Information:</h3>

            <ol>
              <li>A rental application is not considered complete until it has been signed.</li>
              <li>A rental application must be submitted online or on the Alltrade standard application form.</li>
              <li>
                An applicant must answer all questions on the form completely and honestly. Incomplete applications will
                not be processed.
              </li>
              <li>
                A copy of each applicant’s driver’s license or other government issued identification for all adults.
              </li>
              <li>
                Proof of any income. Adequate proof includes three (3) most recent paycheck stubs, a letter from an
                employer, and awards letters for any additional income i.e. scholarships, child support, SSI, etc.
                (Note: tax return eliminated). If an applicant is self-employed, they must include a copy of their two
                (2) most recent federal tax returns.
              </li>
              <li>Depending on financial criteria, previous landlord verification may be needed.</li>
            </ol>

            <h3>Application Review</h3>
            <p>Each application will be reviewed in the following manner:</p>

            <ol>
              <li>
                Alltrade will determine if the information provided in an applicant’s application meets Alltrade’s
                applicant screening criteria outlined below. If not, Alltrade will decline the application.
              </li>
              <li>
                If applicant does, Alltrade will verify your household’s income, employment, check your credit report
                through TRAK 1, Resident Research TransUnion or other similar service, perform background check and
                verify there are no disqualifying factors. If necessary, Alltrade may verify employment and/or rental
                history.
              </li>
              <li>
                If any of the verifications do not confirm that you meet Alltrade’s criteria, Alltrade will decline your
                application.
              </li>
              <li>
                We will strive to process all applications within 48 hours, provided we have received the documents
                referenced above. However, it may take up to several days depending on how quickly Alltrade is able to
                verify the information you have provided.
              </li>
              <li>
                If an application is denied, an applicant will be notified in writing and will be provided the reason(s)
                that the application was denied.
              </li>
              <li>
                {' '}
                If an application is denied, an applicant may request an application be reconsidered with additional
                consideration, such as higher security deposit or the addition of a co-signer, or applicant be
                considered for a less expensive Alltrade property.
              </li>
              <li>
                {' '}
                If an applicant seeks reconsideration within thirty (30) days of denial, no additional application fee
                will be due but additional time may be needed to process the application.
              </li>
              <li>
                An applicant is not guaranteed to be approved for the unit if the applicant is the first to apply.
                Alltrade will accept the most qualified applicant, not necessarily the first applicant.
              </li>
            </ol>

            <h3>Application Approved:</h3>

            <ol>
              <li>Alltrade will continue to accept applications on a unit until the deposit is received.</li>
              <li>
                Once an applicant is accepted, the security deposit is due immediately to secure the unit. At that time,
                a move in date is scheduled.
              </li>
              <li>
                Deposits are non-refundable to residents who opt not to take a unit. An applicant will sign a document
                indicating that the deposit is not refundable if the applicant does not sign a lease and/or take
                possession of the unit.
              </li>
            </ol>

            <h3>Applicant Screening Criteria</h3>
            <p>
              Screening criteria must be applied consistently to all applicants and a worksheet completed. Consideration
              of extenuating circumstances will be considered in the screening process but must be approved by a
              manager. All credit and background checks are done through TRAK 1, Resident Research, Trans Union or other
              approved service.
            </p>

            <p>
              All applications will be reviewed to make sure the applicants meet Alltrade’s criteria for each of the
              following:
            </p>
            <ol>
              <li>Income/Debt;</li>
              <li>Credit history;</li>
              <li>Criminal history; and</li>
              <li>No other automatic disqualifiers.</li>
            </ol>

            <h3>Income/Debt:</h3>
            <ol>
              <li>Alltrade will evaluate the application based on the combined household income of the applicants.</li>
              <li>
                For a deposit on one (1) month’s rent, an applicant’s net income (take home pay) must be at least three
                (3) times the rental amount on the requested unit. This is called the Rent/Income Ratio and is
                calculated by dividing the net income by the rent. For example, if a person is applying for an apartment
                renting for $500.00 and makes $1,600.00 take home pay, the rent ratio is $1,600.00/$500.00 = 3.2 rent
                ratio.
              </li>
              <li>
                If an applicant has a rent ratio of 2.5 – 2.99, the applicant will only be accepted on income grounds if
                the following have been satisfied:
                <ul>
                  <li>Landlord verification for same or similar rent obligation has been obtained;</li>
                  <li>Applicant has satisfactory credit;</li>
                  <li>Applicant pays 1.5 deposit; OR</li>
                  <li>If unable to obtain (a), (b) and (c), applicant has qualified co-signer.</li>
                </ul>
              </li>
              <li>
                Unless rent ratio is higher than 3.2, the applicant cannot have over $500.00 in monthly debt obligations
                (car payments, student loans, etc).
              </li>
              <li>An applicant with less than a 2.5 rent ratio is not eligible unless approved by a manager.</li>
            </ol>

            <h3>Credit History</h3>
            <p>
              Priority will be given to current credit activity over older credit activity. All rent and utilities must
              be paid in full. A consistent, severe or recent history of deficiencies in overall credit or rent payment
              which indicate the family will be unable or would otherwise fail to pay when due rent to the apartment and
              other expenses relating to occupancy of the apartment. Excluding medical bills and student loans, poor
              credit history is grounds for rejection. However, a lack of credit history is not generally an automatic
              disqualification.
            </p>

            <h3>Credit Scores</h3>
            <p>An applicant with a credit score of 500 or less is not eligible unless approved by a manager.</p>

            <p>
              If an applicant has a credit score of less than 549, the applicant will only be accepted on income grounds
              if the following have been satisfied:
            </p>
            <ul>
              <li>Landlord verification for same or similar rent obligation has been obtained;</li>
              <li>Applicant has satisfactory credit;</li>
              <li>Applicant pays 1.5 deposit; OR</li>
              <li>If unable to obtain (a), (b) and (c), applicant has qualified co-signer.</li>
            </ul>

            <h3>Automatic Credit History Disqualifiers:</h3>

            <ol>
              <li>Any open bankruptcy or any bankruptcy within the previous three (3) years;</li>
              <li>Any unpaid apartment collection or previous rent;</li>
              <li>Inability to put utilities in the applicant’s name;</li>
              <li>
                Any eviction judgement within the last seven (7) years. Documentation from a plaintiff in an eviction
                action confirming the eviction was dismissed and all debts were paid will be taken into consideration
                when processing the application.
              </li>
              <li>
                Any false or misleading information provided by an applicant on the written application, or omission of
                a material fact.
              </li>
              <li>
                Records of destruction, consistent late or unpaid rental obligations, evictions, police activity or poor
                housekeeping habits resulting in health and safety hazards are grounds for rejection.
              </li>
            </ol>

            <h3>Criminal History Admissions Criteria</h3>
            <p>
              Alltrade has established a policy to reject all applications where the applicant or any household member
              has been convicted of certain criminal activity. Applicants have a right to request a reasonable
              accommodation. Applicants may also submit with the application evidence of mitigating circumstances, if
              the admissions criteria provides for an individualized assessment of the applicant’s specific criminal
              activity. For all applications considered conditional, Alltrade staff will conduct an individualized
              assessment. The activities that will be grounds for rejection of an application are as follows:
            </p>
            <ol>
              <li>
                Any violent felony conviction or adjudication other than acquittal within seven (7) years. If more than
                seven (7) years but less than ten (10) years, the application will be considered conditional. A violent
                felony is a Class A, B, C, D, E, F and G felony or any felony requiring registration on the sex offender
                registry.
              </li>
              <li>
                Any non-violent felony offense resulting in conviction or adjudication other than acquittal within five
                (5) years. If more than five (5) years but less than seven (7) years, the application will be considered
                conditional. A non-violent felony is a Class H or I felony.
              </li>
              <li>
                Any conviction or adjudication other than acquittal within five (5) years for the sale, distribution or
                manufacture of any controlled or illegal substance other than marijuana. If more than five (5) years but
                less than ten (10) years, the application will be considered conditional.{' '}
              </li>
              <li>
                Any violent misdemeanor offense resulting in conviction or adjudication other than acquittal within two
                (2) years. If more than two (2) years but less than five (5) years, the application will be considered
                conditional. A violent misdemeanor is a Class A1 misdemeanor or a misdemeanor requiring registration on
                the sex offender registry.
              </li>
              <li>
                Any non-violent misdemeanor offense resulting in conviction or adjudication other than acquittal within
                five (5) years. If more than five (5) years but less than ten (10) years, the application will be
                considered conditional. A non-violent misdemeanor is a Class 1,2 or 3 misdemeanor.
              </li>
              <li>
                Any conviction or adjudication other than acquittal, for any sexual offense. If during the applicant’s
                lease Alltrade discovers anyone in the household has been placed on the sex offender registry; legal
                proceedings will begin to terminate the tenancy.
              </li>
              <li>Any conviction or adjudication other than acquittal, which involved bodily harm to a child.</li>
              <li>Lifetime sex offenders.</li>
            </ol>

            <h3>Occupancy Standards</h3>
            <p>
              Our goal is to prevent overcrowding and undue wear and tear to rental properties. Alltrade will abide by
              the local occupancy standards regarding square footage relative to the number of people who may reside in
              a property.
            </p>

            <p>
              To prevent overcrowding and undue wear and tear to rental properties, Alltrade restricts the number of
              people who may reside in a property.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Bedroom Size</th>
                  <th>Maximum persons per household</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>4</td>
                  <td>3</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>

            <h3>Co-Signers</h3>
            <p>
              If an applicant does not meet one or more of the above criteria, they may still be eligible for a rental
              unit if they can get a third-party to guarantee the lease. “Co-signers or “Guarantors” must be related to
              at least one of the applicants. It is preferable that co-signers reside in the same state as the
              applicants. The co-signer must submit a written application along with the application fee and must pass
              the criteria of the screening process as any other applicant and the rent ratio must exceed 6 times the
              rent. If the co-signer cannot come to an Alltrade office in person, the signed application must be
              notarized. All co-signers must be approved by a member of management.
            </p>

            <h3>Refugee Status</h3>
            <p>
              Applicants who have refugee status and/or are receiving case management services and/or rental assistance
              through a recognized social service agency will not be required to submit an application. We will require
              a copy of each family member’s I-9 at the time of arrival in the unit.
            </p>
          </article>
        </Container>
      </Layout>
    )
  }
}
