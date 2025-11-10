import { useGetTreeGetReportsTablsQuery } from '@office-automation/workflow-engine/data/data_reports';
import { useEffect, useState } from 'react';
import * as React from 'react';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { usePostNewCaseMutation } from '@office-automation/workflow-engine/data/data-new-case';
const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const handleClick = (value) => {
  console.log(value, 'valuevaluevalue');
};

const renderTreeItems = (nodes: any[]) => {
  return nodes?.map((node) => (
    <CustomTreeItem
      onClick={() => handleClick(node)}
      key={node.Id}
      itemId={node.Id}
      label={node.Title}
    >
      {node.children?.length > 0 && renderTreeItems(node.children)}
    </CustomTreeItem>
  ));
};

export function WorkflowEngineFeatureNewWorkComponent() {
  const { data } = useGetTreeGetReportsTablsQuery();

  const [postNewCase] = usePostNewCaseMutation();

  const [treeData, setTreeData] = useState<any[]>([]);

  const buildTree = (
    data: { Id: string; ParentId: string; Title: string }[]
  ): any[] => {
    const map: Record<string, any> = {};
    const roots: any[] = [];

    for (const item of data) {
      const id = item.Id;
      const parentId = item.ParentId;
      if (!map[id]) {
        map[id] = { ...item, children: [], lastLevel: true };
      }
      if (parentId === '0') {
        roots.push(map[id]);
      } else {
        if (!map[parentId]) {
          map[parentId] = { children: [] };
        }
        map[parentId].lastLevel = false;
        map[parentId].children.push(map[id]);
      }
    }

    return roots;
  };

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      const tree = buildTree(parsedData);
      console.log(tree, 'treee');
      setTreeData(tree);
    }
  }, [data]);

  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={['CategoryId-44421588767d7acc3d51755092798166']}
      sx={{ overflowX: 'hidden', minHeight: 270, flexGrow: 1, maxWidth: 300 }}
    >
      {renderTreeItems(treeData)}
    </SimpleTreeView>
  );
}

export default WorkflowEngineFeatureNewWorkComponent;
