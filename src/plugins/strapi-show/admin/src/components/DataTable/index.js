import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";

export default function DataTable({ data, name, padding = 0 }) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={padding}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={2}
        rowCount={10}
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">#</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">{name}</Typography>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {data && data.map((item, index) => {
            return (
              <Tr key={index + 1}>
                <Td>
                  <Typography textColor="neutral800">{index + 1}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">{item}</Typography>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}