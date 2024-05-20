// Schema for the Projects page
export default {
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Id',
              type: 'string',
            },
            {
              name: 'companyLogo',
              title: 'companyLogo',
              type: 'image',
            },
            {
              name: 'companyImage',
              title: 'CompanyImage',
              type: 'image',
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'singleSliderImg1',
              title: 'SingleSliderImg1',
              type: 'image',
            },
            {
              name: 'singleSliderImg2',
              title: 'SingleSliderImg2',
              type: 'image',
            },
            {
              name: 'singleSliderImg3',
              title: 'SingleSliderImg3',
              type: 'image',
            },
            {
              name: 'singleSliderImg4',
              title: 'SingleSliderImg4',
              type: 'image',
            },
            {
              name: 'singleProDesc',
              title: 'SingleProDesc',
              type: 'text',
            },
            {
              name: 'singleProDescList1',
              title: 'SingleProDescList1',
              type: 'text',
            },
            {
              name: 'singleProDescList2',
              title: 'SingleProDescList2',
              type: 'text',
            },
            {
              name: 'singleProDescList3',
              title: 'SingleProDescList3',
              type: 'text',
            },
            {
              name: 'singleProDescList4',
              title: 'SingleProDescList4',
              type: 'text',
            },
            {
              name: 'singleProDescList5',
              title: 'SingleProDescList5',
              type: 'text',
            },
            {
              name: 'singleProDescList6',
              title: 'SingleProDescList6',
              type: 'text',
            },
            {
              name: 'singleProDescList7',
              title: 'SingleProDescList7',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
