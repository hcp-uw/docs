/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  hcpLeadershipDocs: [
    {
      type: 'doc',
      id: 'club-lead-docs/lead-docs-intro',
      label: 'Introduction'
    }, // TODO: we gotta figure out where the category page went
    {
      type: 'category',
      label: 'Co-Chair Docs',
      items: [
        'club-lead-docs/co-chair-docs/purpose-and-role-qualifications',
        'club-lead-docs/co-chair-docs/managing-general-meetings',
        'club-lead-docs/co-chair-docs/managing-leadership-teams',
        'club-lead-docs/co-chair-docs/overseeing-project-teams',
        'club-lead-docs/co-chair-docs/club-expansion-and-future-goals',
        'club-lead-docs/co-chair-docs/decision-making',
        'club-lead-docs/co-chair-docs/professional-outreach',
        'club-lead-docs/co-chair-docs/discord-management'
      ]
    },
    {
      type: 'category',
      label: 'Communication Team Docs',
      items: [
        'club-lead-docs/communications-team-docs/purpose-and-role-qualifications',
        'club-lead-docs/communications-team-docs/general-rules',
        'club-lead-docs/communications-team-docs/resources',
      ]
    },
    {
      type: 'category',
      label: 'Education Team Docs',
      items: [
        'club-lead-docs/education-team-docs/purpose-and-role-qualifications',
        'club-lead-docs/education-team-docs/workshop-planning-timeline'
      ]
    },
    {
      type: 'category',
      label: 'Tech Team Docs',
      items: [
        'club-lead-docs/tech-team-docs/purpose-and-role-qualifications',
        'club-lead-docs/tech-team-docs/managing-website-content',
        'club-lead-docs/tech-team-docs/managing-hcp-software',
        'club-lead-docs/tech-team-docs/advising-teams',
      ]
    }
  ],
  projectTeamDocs: [
    {
      type: 'doc',
      id: 'project-team-docs/project-team-docs-intro',
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Project Guidelines',
      items: [
        'project-team-docs/project-guidelines/part0-logistics'
      ]
    },
  ],
};


module.exports = sidebars;