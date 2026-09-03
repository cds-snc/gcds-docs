---
title: Service level agreement
translationKey: sla
layout: 'layouts/base.njk'
eleventyNavigation:
  key: slaEN
  title: Service level agreement
  locale: en
  order: 7
  hideMain: true
---

# GC Design System: Service level agreement (1.1)

GC Design System is a service that is owned and operated by the Canadian Digital Service (CDS) at <gcds-link href="https://www.canada.ca/en/employment-social-development.html" external>Employment and Social Development Canada (ESDC)</gcds-link>. This service enables Canadian federal departments and agencies to build and design trusted, predictable and accessible web and application experiences.

GC Design System team refers to the team administering GC Design System within CDS.

**You’re a GC Design System client if you are:**

- A Government of Canada department or agency using GC Design System.
- Current staff or formal vendor of a department or agency using GC Design System.

**This agreement covers CDS responsibilities for GC Design System. Exclusions:**

- Devices such as computers or mobile phones.
- Websites, online services or applications that use GC Design System.

## Responsibilities

### Canadian Digital Service (CDS) is responsible for:

- Hosting and supporting [GC Design System]({{ links.home }}).
- Handling support requests and inquiries during regular business hours (9am to 5pm Eastern Time).
- Responding within one business day to incidents. GC Design System follows the <gcds-link href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32611" external>TBS Directive on Security Management</gcds-link> and follows an incident response process to resolve issues in a timely manner.
- Patching security vulnerabilities in a timely manner, where CDS determines the level of threat a security vulnerability possesses. Major vulnerabilities are patched as soon as possible but no more than a week after the root cause is found. External dependencies for code are subject to longer timelines.
- GCDS Components v1.0.0 (`@gcds-core/components`) is designed to ensure API stability within the 1.x release line, so teams can adopt GCDS Components knowing that minor and patch releases seek to avoid breaking changes. Breaking changes should only occur in major releases, not in minor updates or patches. If you're currently using `@cdssnc/gcds-components`, you’ll need to migrate to continue receiving updates, fixes, and future improvements. Follow the migration guide: <gcds-link href="https://github.com/cds-snc/gcds-components/blob/main/.docs/migration/stable-v1.md" external>Migrating from `@cdssnc/gcds-components` to `@gcds-core/components`</gcds-link>.
- Restoring the system to operation in case of an unplanned outage.
- Alerting clients via our [website]({{ links.home }}) and [mailing list]({{ links.contact }}), if GC Design System is unavailable for any reason, as soon as CDS learns of this.
- Ensuring the system is available for use, with a page load time of less than 10 seconds in Canada on high-speed Internet, unless the product is experiencing a denial of service attack or there are issues with [GC Design System infrastructure and platform providers](#gc-design-system-infrastructure-and-platform-providers-are-responsible-for).
- Sharing application logs with the Canadian Centre for Cyber Security (CCCS). GC Design System follows the <gcds-link href="https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/direction-secure-use-commercial-cloud-services-spin.html" external>Direction on the Secure Use of Commercial Cloud Services: Security Policy Implementation Notice (SPIN).</gcds-link>

### GC Design System infrastructure and platform providers are responsible for:

- Providing Amazon Web Services (AWS) service cloud infrastructure and enforcing the <gcds-link href="https://aws.amazon.com/service-terms/" external>AWS terms of service</gcds-link>.
- Providing <gcds-link href="https://aws.amazon.com/cloudfront/sla/" external>Amazon CloudFront</gcds-link>’s content delivery network (CDN).
- Providing Figma and enforcing <gcds-link href="https://www.figma.com/legal/tos/" external>Figma’s terms of service</gcds-link>.
- Providing the <gcds-link href="https://www.npmjs.com/" external>npm</gcds-link> open source software registry.

CDS is not responsible for issues or outages with AWS infrastructure, Amazon CloudFront, Figma, or npm, that may impact GC Design System uptime and availability.

CDS is responsible for updating clients via the GC Design System [website]({{ links.home }}) and [mailing list]({{ links.contact }}) on any information pertaining to an AWS, Amazon CloudFront, Figma or npm outage.

## Uptime guarantee

This service-level agreement (SLA) covers infrastructure running the GC Design System [codebase]({{ links.startToUseDevelop }}) and [website]({{ links.home }}).

CDS guarantees that the GC Design System will have 99.0% uptime with no more than 1% downtime during regular business hours in a year.

CDS commits to a service availability rate of 99.0% — excluding urgent scheduled maintenance and planned maintenance periods (as defined herein) — across each calendar quarter.

The GC Design System team uses a continuous delivery approach, sometimes patching multiple times a day without any downtime. Downtime is defined as an unplanned interruption or other event to the service resulting in a user-perceptible reduction in the existing quality of service or an event that will impact the existing service and a full or partial unavailability of the service to the client/customer.

If the GC Design System team plans any downtime they will notify clients via the [website]({{ links.home }}) and [mailing list]({{ links.contact }}) with a one week notice and try to ensure that planned downtime does not interfere with the operation of the system.

This uptime guarantee excludes any downtime experienced by Amazon or other infrastructure providers. Amazon promises 99.9% uptime as per <gcds-link href="https://aws.amazon.com/messaging/sla/" external>their SLA</gcds-link>.

## Support

### Service contacts

Clients should direct all support requests or bug reports to either of the following: 
- <gcds-link href="https://design-system.canada.ca/en/contact" external>Contact us</gcds-link> page on the GC Design System website.
- <gcds-link href="https://github.com/cds-snc/gcds-components/issues/new/choose" external>New issues</gcds-link> on the CDS Github repo. 

### Service availability

| Issue                                                         | Initial response                       | Ongoing updates     |
| ------------------------------------------------------------- | -------------------------------------- | ------------------- |
| Service is unavailable                                        | 8 hours, during regular business hours | Every 2 hours after |
| Service is affected (performance issues, intermittent errors) | 1 business day                         | 1 per business day  |
| Service has recovered and is functioning                      | 2 business days                        | N/A                 |

### Service contacts

Clients should direct all support requests or bug reports to either of the following: 
- <gcds-link href="https://design-system.canada.ca/en/contact" external>Contact us</gcds-link> page on the GC Design System website.
- <gcds-link href="https://github.com/cds-snc/gcds-components/issues/new/choose" external>New issues</gcds-link> on the CDS Github repo. 

### Response times for contact form on website 

CDS will provide an initial response within one (1) business day of receiving a support request via the Contact us page, Monday to Friday from 9am to 5pm (Eastern Time). Service tickets are logged in Freshdesk. They will be closed after 10 business days, if there is no response from the client.

| Description                                                   | Initial response | Resolution\*                                                         |
| ------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------- |
| New ticket submitted via Contact Us                           | 1 business day   | 5 business days                                                      |
| Ticket with “Waiting on Client” status                        | Not applicable   | 10 business days and will be closed if no further action is required |
| Service is affected (performance issues, intermittent errors) | 1 business day   | 5 business days                                                      |

\* Resolution means that the GC Design System team has taken the appropriate action, as follows, to address the inquiry and no further action is required on their part.

- Action completed: The team took an action to address the inquiry, such as a change to code, design, content, documentation, configuration, or another deliverable.
- Guidance provided: The client received the information, advice, resources, recommended approach, or future direction needed to address their inquiry.
- Decision provided: The team made and communicated a decision about the inquiry, including the rationale where appropriate. Could include deciding not to make the requested change or explaining why something is outside the product's scope.
- Referred or redirected: The client was directed to the appropriate team, service, process, or resource, either within or external to GC Design System.

### Response times vary for the GitHub issues form 

SLA response and resolution targets do not apply to bug reports, feature requests and contributions sent via the New issues form. The GC Design System team reviews and prioritizes these submissions during designated sprints. As a result, response times may vary. 
The GC Design System team will typically provide updates in the discussion thread of the relevant GitHub issue.

### Planned maintenance period

A planned maintenance period is defined as a complete or partial loss of service availability scheduled by the GC Design System team to allow the performance of normal maintenance work. A loss of service availability during a planned maintenance period shall not be considered to be a service outage.

GC Design System team will notify the client via our [website]({{ links.home }}) and [mailing list]({{ links.contact }}) of any planned maintenance period no fewer than 2 business days prior to the start of the applicable planned maintenance period. Planned maintenance periods will be scheduled for non-peak periods of activity.

A loss of service availability, which occurs outside of a planned maintenance period but is caused by work performed during the planned maintenance period, will be considered a service outage. Information regarding planned maintenance periods will be shared by the [mailing list]({{ links.contact }}).

### Notice of service deprecation

In case CDS is no longer able to support and operate GC Design System due to factors beyond its control, it will notify clients 2 months in advance via our [website]({{ links.home }}) and [mailing list]({{ links.contact }}).

In the event that CDS needs to decommission the service, the GC Design System team will work with clients to ensure the continuity of the web and application experiences they stand up with GC Design System, as well as provide an options analysis for alternative solutions.

### GC Design System is open source

GC Design System is open source and available for others to stand up their own version based on the code found in <gcds-link href="https://github.com/cds-snc/gcds-components" external>GitHub</gcds-link>.

Note that some GC Design System components contain the <gcds-link href="https://www.canada.ca/en/government/system/government-communications/federal-identity-requirements/legal-protection-official-symbols-government-canada.html" external>Government of Canada’s official symbols</gcds-link>, which are trademarked and may only be used for communications, operations, and activities of the Government of Canada.

- As per [GC Design System’s Terms of Use]({{ links.termsOfUse }}), clients are responsible for ensuring the <gcds-link href="https://www.canada.ca/en/government/system/government-communications/federal-identity-requirements/legal-protection-official-symbols-government-canada.html" external>Government of Canada’s official symbols</gcds-link> are only used where legally authorized and in line with <gcds-link href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/design-standard.html" external>Canada’s Federal Identity Program</gcds-link>.
