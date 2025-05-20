import { Component } from '@angular/core'
import { TwButton, TwCheckbox, TwIcon } from 'tailwind-ng'

export interface Task {
  name: string
  done: {
    fully: boolean
    partially?: boolean
  }
  subtasks?: Task[]
}

@Component({
  selector: 'app-checkboxes-preview',
  imports: [TwCheckbox, TwButton, TwIcon],
  templateUrl: './preview.component.html',
  styles: ``,
})
export class PreviewComponent {
  readonly task: Task = {
    name: 'Task B',
    done: {
      fully: false,
      partially: true,
    },
    subtasks: [
      { name: 'Step 1', done: { fully: true } },
      {
        name: 'Step 2',
        done: { fully: false },
        subtasks: [
          { name: 'Step 2.1', done: { fully: false } },
          { name: 'Step 2.2', done: { fully: false } },
          {
            name: 'Step 2.3',
            done: { fully: false, partially: true },
            subtasks: [
              {
                name: 'Step 2.3.1',
                done: { fully: false },
              },
              { name: 'Step 2.3.2', done: { fully: true } },
            ],
          },
        ],
      },
      { name: 'Step 3', done: { fully: false } },
    ],
  }

  updateTask({ checked: fully = false, indeterminate: partially = false }, task = this.task): void {
    console.time(`${task.name} updated in`)
    task.done = { fully, partially }
    console.timeEnd(`${task.name} updated in`)
    console.table(task, ['name', 'fully', 'partially']) // TODO: Remove
  }

  saveTask(task = this.task): void {
    console.log(
      `${task.name}, done: { fully: ${task.done.fully}, partially: ${!!task.done.partially} }`
    ) // TODO: Remove
    if (task.subtasks) {
      console.groupCollapsed(`> ${task.name} subtasks:`)
      task.subtasks.forEach(subtask => this.saveTask(subtask))
      console.groupEnd()
    }
  }

  saveTasks(): void {
    this.saveTask()
  }
}
