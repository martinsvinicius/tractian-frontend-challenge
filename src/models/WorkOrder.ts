export interface WorkOrder {
  assetId: number;
  assignedUserIds: number[];
  checklist: WorkOrderTask[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface WorkOrderTask {
  completed: boolean;
  task: string;
}
