import React, { useState } from 'react'
import { Accordion, AccordionToggle, AccordionContent, AccordionGroup } from '@strapi/design-system/Accordion';
import { Box } from '@strapi/design-system/Box';
import DataTable from '../DataTable';

export default function DataAccordion({ name, data, onClick }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box padding={4} background="neutral100">
      <Accordion expanded={expanded} onToggle={() => setExpanded(s => !s)} id="acc-1" size="S">
        <AccordionToggle title={name} />
        <AccordionContent>
          <DataTable data={data} name={name} onClick={onClick} />
        </AccordionContent>
      </Accordion>
    </Box>
  )
}
