// Add column and data to gcds-table examples
document.addEventListener('DOMContentLoaded', function () {
  const locale = document.documentElement.lang;
  const columns = [
    {
      field: 'submission_id',
      header: 'ID',
      rowHeader: true,
    },
    {
      field: 'submitter_name',
      header: locale === 'fr' ? 'Nom' : 'Name',
    },
    {
      field: 'date_submitted',
      header: locale === 'fr' ? 'Date de soumission' : 'Date Submitted',
    },
    {
      field: 'assigned_reviewer',
      header: locale === 'fr' ? 'Examinateur' : 'Reviewer',
    },
  ];

  if (
    window.location.pathname.includes('/components/table/code') ||
    window.location.pathname.includes('/composants/tableau/code')
  ) {
    const componentPreviews = document.querySelectorAll(
      'iframe.preview-iframe',
    );

    componentPreviews.forEach(iframe => {
      let tableData = data;

      iframe.addEventListener('load', () => {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        const table = iframeDoc.querySelector('gcds-table');
        const iframeBodyElement = iframeDoc.querySelector('body');

        // Use only the first 10 rows for filter and sort previews
        if (
          iframeBodyElement.classList.contains('filter-preview') ||
          iframeBodyElement.classList.contains('sort-preview') ||
          iframeBodyElement.classList.contains('caption-preview') ||
          iframeBodyElement.classList.contains('filter-value-preview')
        ) {
          tableData = tableData.slice(0, 10);
        }

        if (
          table &&
          !iframeBodyElement.classList.contains('columns-data-preview')
        ) {
          table.columns = columns;
          table.data = tableData;
        }
      });
    });
  }

  // Populate the preview at the top of the page
  if (
    window.location.pathname.includes('/components/table/preview') ||
    window.location.pathname.includes('/composants/tableau/preview')
  ) {
    const table = document.querySelector('gcds-table');
    if (table) {
      table.columns = columns;
      table.data = data;
    }
  }
});

const data = [
  {
    submission_id: 'EXP-2026-001',
    submitter_name: 'John A. Smith',
    date_submitted: '2026-01-15 4:30',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-002',
    submitter_name: 'Maria Gonzalez',
    date_submitted: '2026-01-15 5:15',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-003',
    submitter_name: 'Robert James',
    date_submitted: '2026-01-15 6:22',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-004',
    submitter_name: 'Emily R. Davis',
    date_submitted: '2026-01-15 8:45',
    status: 'Rejected',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-005',
    submitter_name: 'Ahmed Khalil',
    date_submitted: '2026-01-15 9:20',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-006',
    submitter_name: 'Sophie Laurent',
    date_submitted: '2026-01-15 10:10',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-007',
    submitter_name: "Kevin O'Connor",
    date_submitted: '2026-01-16 3:55',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-008',
    submitter_name: 'Priya Sharma',
    date_submitted: '2026-01-16 5:33',
    status: 'Pending Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-009',
    submitter_name: 'Thomas Lee',
    date_submitted: '2026-01-16 7:05',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-010',
    submitter_name: 'Anna Petrova',
    date_submitted: '2026-01-16 9:18',
    status: 'Rejected',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-011',
    submitter_name: 'Carlos Rivera',
    date_submitted: '2026-01-17 4:12',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-012',
    submitter_name: 'Jennifer Kim',
    date_submitted: '2026-01-17 6:47',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-013',
    submitter_name: 'Marcus Brown',
    date_submitted: '2026-01-17 8:25',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-014',
    submitter_name: 'Olga Novak',
    date_submitted: '2026-01-17 10:40',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-015',
    submitter_name: 'Raj Patel',
    date_submitted: '2026-01-18 3:20',
    status: 'Rejected',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-016',
    submitter_name: 'Laura Jensen',
    date_submitted: '2026-01-18 5:08',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-017',
    submitter_name: 'David Wilson',
    date_submitted: '2026-01-18 7:35',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-018',
    submitter_name: 'Fatima Ali',
    date_submitted: '2026-01-18 9:52',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-019',
    submitter_name: 'Greg Thompson',
    date_submitted: '2026-01-19 4:45',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-020',
    submitter_name: 'Nadia Sokolov',
    date_submitted: '2026-01-19 6:30',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-021',
    submitter_name: 'Michel Dubois',
    date_submitted: '2026-01-19 8:15',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-022',
    submitter_name: 'Linda Carter',
    date_submitted: '2026-01-19 10:02',
    status: 'Rejected',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-023',
    submitter_name: 'Wei Zhang',
    date_submitted: '2026-01-20 4:25',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-024',
    submitter_name: 'Aisha Rahman',
    date_submitted: '2026-01-20 5:50',
    status: 'Pending Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-025',
    submitter_name: 'James Murphy',
    date_submitted: '2026-01-20 7:40',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-026',
    submitter_name: 'Elena Costa',
    date_submitted: '2026-01-20 9:30',
    status: 'Under Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-027',
    submitter_name: 'Tomáš Novák',
    date_submitted: '2026-01-21 3:45',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-028',
    submitter_name: 'Rachel Green',
    date_submitted: '2026-01-21 5:20',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-029',
    submitter_name: 'Omar Hassan',
    date_submitted: '2026-01-21 7:10',
    status: 'Rejected',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-030',
    submitter_name: 'Susan Bailey',
    date_submitted: '2026-01-21 9:05',
    status: 'Under Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-031',
    submitter_name: 'Luca Rossi',
    date_submitted: '2026-01-22 4:35',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-032',
    submitter_name: 'Karen White',
    date_submitted: '2026-01-22 6:25',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-033',
    submitter_name: 'Mohamed El-Sayed',
    date_submitted: '2026-01-22 8:55',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-034',
    submitter_name: 'Claire Dubois',
    date_submitted: '2026-01-22 10:40',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-035',
    submitter_name: 'Henry Taylor',
    date_submitted: '2026-01-23 3:10',
    status: 'Rejected',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-036',
    submitter_name: 'Yuki Tanaka',
    date_submitted: '2026-01-23 5:00',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-037',
    submitter_name: 'Ana Silva',
    date_submitted: '2026-01-23 7:30',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-038',
    submitter_name: 'Paul Johnson',
    date_submitted: '2026-01-23 9:20',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-039',
    submitter_name: 'Mei Chen',
    date_submitted: '2026-01-24 4:15',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-040',
    submitter_name: 'Javier Lopez',
    date_submitted: '2026-01-24 6:05',
    status: 'Rejected',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-041',
    submitter_name: 'Norah Kelly',
    date_submitted: '2026-01-24 8:35',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-042',
    submitter_name: 'Andreas Müller',
    date_submitted: '2026-01-24 10:25',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-043',
    submitter_name: 'Sofia Ahmed',
    date_submitted: '2026-01-25 3:55',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-044',
    submitter_name: 'Matthew Evans',
    date_submitted: '2026-01-25 5:40',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-045',
    submitter_name: 'Larisa Ivanova',
    date_submitted: '2026-01-25 7:25',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-046',
    submitter_name: 'Daniel Park',
    date_submitted: '2026-01-25 9:15',
    status: 'Rejected',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-047',
    submitter_name: 'Emma Watson',
    date_submitted: '2026-01-26 4:20',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-048',
    submitter_name: 'Ricardo Silva',
    date_submitted: '2026-01-26 6:10',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-049',
    submitter_name: 'Ayesha Khan',
    date_submitted: '2026-01-26 8:45',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-050',
    submitter_name: 'Chris Walker',
    date_submitted: '2026-01-26 10:35',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-051',
    submitter_name: 'Hana Suzuki',
    date_submitted: '2026-01-27 3:30',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-052',
    submitter_name: 'Patricia Moore',
    date_submitted: '2026-01-27 5:25',
    status: 'Rejected',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-053',
    submitter_name: 'Khalid Al-Mansoori',
    date_submitted: '2026-01-27 7:15',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-054',
    submitter_name: 'Julia Berg',
    date_submitted: '2026-01-27 9:05',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-055',
    submitter_name: 'Viktor Petrov',
    date_submitted: '2026-01-28 4:10',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-056',
    submitter_name: 'Amy Roberts',
    date_submitted: '2026-01-28 6:00',
    status: 'Pending Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-057',
    submitter_name: 'Leila Bouchard',
    date_submitted: '2026-01-28 8:30',
    status: 'Rejected',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-058',
    submitter_name: 'Nick Harris',
    date_submitted: '2026-01-28 10:20',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-059',
    submitter_name: 'Marta Kowalska',
    date_submitted: '2026-01-29 3:40',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-060',
    submitter_name: 'George Clark',
    date_submitted: '2026-01-29 5:30',
    status: 'Pending Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-061',
    submitter_name: 'Sana Malik',
    date_submitted: '2026-01-29 7:20',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-062',
    submitter_name: 'Oliver Young',
    date_submitted: '2026-01-29 9:10',
    status: 'Rejected',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-063',
    submitter_name: 'Eva Nilsson',
    date_submitted: '2026-01-30 4:05',
    status: 'Under Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-064',
    submitter_name: 'Ryan Mitchell',
    date_submitted: '2026-01-30 6:50',
    status: 'Pending Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-065',
    submitter_name: 'Fatou Diop',
    date_submitted: '2026-01-30 8:40',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-066',
    submitter_name: 'Alexandre Roy',
    date_submitted: '2026-01-30 10:30',
    status: 'Under Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-067',
    submitter_name: 'Lina Zhang',
    date_submitted: '2026-01-31 3:15',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-068',
    submitter_name: 'Mark Lewis',
    date_submitted: '2026-01-31 5:05',
    status: 'Rejected',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-069',
    submitter_name: 'Nour El-Din',
    date_submitted: '2026-01-31 7:55',
    status: 'Approved',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-070',
    submitter_name: 'Sarah Jenkins',
    date_submitted: '2026-01-31 9:45',
    status: 'Under Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-071',
    submitter_name: 'Takao Yamamoto',
    date_submitted: '2026-02-01 4:25',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-072',
    submitter_name: 'Rebecca Hall',
    date_submitted: '2026-02-01 6:15',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-073',
    submitter_name: 'Ibrahim Yusuf',
    date_submitted: '2026-02-01 8:05',
    status: 'Rejected',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-074',
    submitter_name: 'Ingrid Larsen',
    date_submitted: '2026-02-01 10:55',
    status: 'Under Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-075',
    submitter_name: 'Samuel Ortiz',
    date_submitted: '2026-02-02 3:35',
    status: 'Pending Review',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-076',
    submitter_name: 'Michelle Gray',
    date_submitted: '2026-02-02 5:25',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-077',
    submitter_name: 'Amina Diallo',
    date_submitted: '2026-02-02 7:15',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-078',
    submitter_name: 'Philip Scott',
    date_submitted: '2026-02-02 9:05',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-079',
    submitter_name: 'Kristina Jørgensen',
    date_submitted: '2026-02-03 4:10',
    status: 'Rejected',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-080',
    submitter_name: 'Edward King',
    date_submitted: '2026-02-03 6:00',
    status: 'Approved',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-081',
    submitter_name: 'Zahra Mahmoud',
    date_submitted: '2026-02-03 8:50',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-082',
    submitter_name: 'Chloe Martin',
    date_submitted: '2026-02-03 10:40',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-083',
    submitter_name: 'Hiroshi Sato',
    date_submitted: '2026-02-04 3:20',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-084',
    submitter_name: 'Donna Price',
    date_submitted: '2026-02-04 5:10',
    status: 'Rejected',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-085',
    submitter_name: 'Youssef Bennani',
    date_submitted: '2026-02-04 7:00',
    status: 'Under Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-086',
    submitter_name: 'Benjamin Cox',
    date_submitted: '2026-02-04 9:50',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-087',
    submitter_name: 'Maja Petrović',
    date_submitted: '2026-02-05 4:30',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-088',
    submitter_name: 'Lori Adams',
    date_submitted: '2026-02-05 6:20',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-089',
    submitter_name: 'Rashid Alawi',
    date_submitted: '2026-02-05 8:10',
    status: 'Rejected',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-090',
    submitter_name: 'Nathan Ward',
    date_submitted: '2026-02-05 10:00',
    status: 'Pending Review',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-091',
    submitter_name: 'Elena García',
    date_submitted: '2026-02-06 3:45',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-092',
    submitter_name: 'Grace Lee',
    date_submitted: '2026-02-06 5:35',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-093',
    submitter_name: 'Salim Nasser',
    date_submitted: '2026-02-06 7:25',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-094',
    submitter_name: 'Jacob Hill',
    date_submitted: '2026-02-06 9:15',
    status: 'Rejected',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-095',
    submitter_name: 'Anna Kowalski',
    date_submitted: '2026-02-07 4:05',
    status: 'Approved',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-096',
    submitter_name: 'Theresa Fox',
    date_submitted: '2026-02-07 6:55',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
  {
    submission_id: 'EXP-2026-097',
    submitter_name: 'Hassan Omar',
    date_submitted: '2026-02-07 8:45',
    status: 'Pending Review',
    assigned_reviewer: 'Sarah Chen',
  },
  {
    submission_id: 'EXP-2026-098',
    submitter_name: 'Steven Baker',
    date_submitted: '2026-02-07 10:35',
    status: 'Approved',
    assigned_reviewer: 'David Patel',
  },
  {
    submission_id: 'EXP-2026-099',
    submitter_name: 'Miho Nakamura',
    date_submitted: '2026-02-08 3:25',
    status: 'Rejected',
    assigned_reviewer: 'Lisa Wong',
  },
  {
    submission_id: 'EXP-2026-100',
    submitter_name: 'Pamela Reed',
    date_submitted: '2026-02-08 5:15',
    status: 'Under Review',
    assigned_reviewer: 'Michael Tran',
  },
];
