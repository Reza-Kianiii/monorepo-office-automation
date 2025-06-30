import { useGetTreeGetReportsTablsQuery } from '@office-automation/workflow-engine/data/data_reports';
import { useEffect, useState } from 'react';
import * as React from 'react';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

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

function ExpandIcon(props: React.PropsWithoutRef<typeof AddBoxRoundedIcon>) {
  return <AddBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function CollapseIcon(
  props: React.PropsWithoutRef<typeof IndeterminateCheckBoxRoundedIcon>
) {
  return <IndeterminateCheckBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function EndIcon(
  props: React.PropsWithoutRef<typeof DisabledByDefaultRoundedIcon>
) {
  return <DisabledByDefaultRoundedIcon {...props} sx={{ opacity: 0.3 }} />;
}

const renderTreeItems = (nodes: any[]) => {
  return nodes?.map((node) => (
    <CustomTreeItem key={node.Id} itemId={node.Id} label={node.Title}>
      {node.children?.length > 0 && renderTreeItems(node.children)}
    </CustomTreeItem>
  ));
};

export function WorkFlowEngineFeatureReports() {
  const { data } = useGetTreeGetReportsTablsQuery();
  const [treeData, setTreeData] = useState<any[]>([]);

  const buildTree = (
    data: { Id: string; ParentId: string; Title: string }[]
  ) => {
    const nodes: Record<string, any> = {};
    const tree: any[] = [];

    data.forEach((item) => {
      nodes[item.Id] = { ...item, children: [] };
    });

    console.log(nodes, 'nodesnodesnodesnodesnodes');

    Object.values(nodes).forEach((node: any) => {
      if (node.ParentId === '0') {
        console.log(node, 'uuyuyuyuyutewrwerwer');
        tree.push(node);
      } else {
        const parent = nodes[node.ParentId];
        console.log(parent, 'hhghghghghfhddf');
        if (parent) {
          parent.children.push(node);
        } else {
          tree.push(node); // اگر پدرش پیدا نشد
        }
      }
    });

    return tree;
  };

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      const tree = buildTree(parsedData);
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

export default WorkFlowEngineFeatureReports;
