import React from "react";
import Eye from '@strapi/icons/Eye';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { IconButton } from "@strapi/design-system/IconButton";
import { Typography } from "@strapi/design-system/Typography";
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";

export default function DataTable({ data, name, padding = 0, onClick }) {
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

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
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

                <Td>
                  <Flex style={{ justifyContent: "end" }}>
                    <IconButton
                      onClick={() => onClick({type: name.toLowerCase(), key: item})}
                      label="Show"
                      noBorder
                      icon={<Eye />}
                    />

                  </Flex>

                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}