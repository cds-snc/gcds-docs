module.exports = {
  en: {
    columns: [
      {
        field: 'submission_id',
        header: 'ID',
        rowHeader: true,
      },
      {
        field: 'submitter_name',
        header: 'Name',
      },
      {
        field: 'date_submitted',
        header: 'Date Submitted',
      },
      {
        field: 'assigned_reviewer',
        header: 'Reviewer',
      },
    ],
  },
  fr: {
    columns: [
      {
        field: 'submission_id',
        header: 'ID',
        rowHeader: true,
      },
      {
        field: 'submitter_name',
        header: 'Nom',
      },
      {
        field: 'date_submitted',
        header: 'Date de soumission',
      },
      {
        field: 'assigned_reviewer',
        header: 'Examinateur',
      },
    ],
  },
  data: [
    {
      submission_id: 'EXP-2026-001',
      submitter_name: 'John A. Smith',
      date_submitted: '2026-01-15 4:30',
      assigned_reviewer: 'Sarah Chen',
    },
    {
      submission_id: 'EXP-2026-002',
      submitter_name: 'Maria Gonzalez',
      date_submitted: '2026-01-15 5:15',
      assigned_reviewer: 'David Patel',
    },
    {
      submission_id: 'EXP-2026-003',
      submitter_name: 'Robert James',
      date_submitted: '2026-01-15 6:22',
      assigned_reviewer: 'Lisa Wong',
    },
    {
      submission_id: 'EXP-2026-004',
      submitter_name: 'Emily R. Davis',
      date_submitted: '2026-01-15 8:45',
      assigned_reviewer: 'Michael Tran',
    },
    {
      submission_id: 'EXP-2026-005',
      submitter_name: 'Ahmed Khalil',
      date_submitted: '2026-01-15 9:20',
      assigned_reviewer: 'Sarah Chen',
    },
  ],
};
