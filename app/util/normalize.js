export function normalizeTask(task) {
  return {
    description: task.description,
    project: (task.project || '').toUpperCase(),
    priority: (task.priority || 'none').toLowerCase(),
    completedAt: task.completedAt
  }
}
