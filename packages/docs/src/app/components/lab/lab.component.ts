import { Component, InputSignal } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { TwButton, TwComboboxModule, TwIcon, TwDialog, TwCheckbox } from 'tailwind-ng'
import { isCombobox, Popup } from '@tailwind-ng/core'

interface User {
  image?: string
  name: string
  status?: 'active' | 'inactive'
}

export interface Task {
  name: string
  done: {
    fully: boolean
    partially?: boolean
  }
  subtasks?: Task[]
}
@Component({
  selector: 'app-lab',
  imports: [
    TwButton,
    TwComboboxModule,
    TwIcon,
    TwDialog,
    ReactiveFormsModule,
    TwCheckbox,
    ReactiveFormsModule,
  ],
  templateUrl: './lab.component.html',
})
export class LabComponent {
  // Example with recursion but throw an expressionChangedAfterItHasBeenCheckedError
  // if there is some parent task that is updated after the view has been checked.
  // This may occurs if the task is in an inconsistent state.
  // For example: one parent with done.fully=true but having a child with done.fully=false.
  // In this case, the child will notify the parent and the parent will be indeterminate instead of checked.
  // To avoid this, data must be consistent in the whole task tree.

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
      task.subtasks.forEach((subtask) => this.saveTask(subtask))
      console.groupEnd()
    }
  }

  saveTasks(): void {
    this.saveTask()
  }

  get _users(): User[] {
    return [
      {
        image:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Elizabeth Martinez',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'David Rodriguez',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Susan Wilson',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Courtney Henry',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Tom Cook',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Charles Thomas',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Mary Taylor',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Christopher Moore',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Lindsay Walton',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'James Williams',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Linda Jones',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Barbara Garcia',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Whitney Francis',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Leonard Krasner',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Floyd Miles',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emily Selman',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Kristin Watson',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emma Dorsey',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Jane Smith',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Patricia Brown',
        status: 'active',
      },
      {
        image:
          'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Ronald Rodriguez',
        status: 'inactive',
      },
      {
        image:
          'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Anthony Lewis',
        status: 'active',
      },
    ]
  }

  users1: User[] = this._users
  users2: User[] = this._users
  users3: User[] = this._users
  users4: User[] = this._users

  backdrop: string[] = []

  private checkMatch = (x: string, y: string) => {
    x = x.toLocaleLowerCase()
    y = y.toLocaleLowerCase()
    return x.includes(y) || x.startsWith(y)
  }

  filter(value: string, id = 1): void {
    const values = value.split(',').map((x) => x.trim())
    switch (id) {
      case 1:
        if (values.length > 1) {
          const usersMap = new Map<string, User>()
          const filtered = this._users.filter((x) => {
            return values.some((v) => this.checkMatch(x.name, v))
          })
          filtered.forEach((f) => usersMap.set(f.name, f))
          this.users1 = [...usersMap.values()]
        } else {
          this.users1 = this._users.filter((x) => this.checkMatch(x.name, value))
        }
        break
      case 2:
        if (values.length > 1) {
          const usersMap = new Map<string, User>()
          const filtered = this._users.filter((x) => {
            return values.some((v) => this.checkMatch(x.name, v))
          })
          filtered.forEach((f) => usersMap.set(f.name, f))
          this.users2 = [...usersMap.values()]
        } else {
          this.users2 = this._users.filter((x) => this.checkMatch(x.name, value))
        }
        break
      case 3:
        this.users3 = this._users.filter((x) => {
          return x.name.includes(value) || x.name.startsWith(value)
        })
        break
      case 4:
        this.users4 = this._users.filter((x) => {
          return x.name.includes(value) || x.name.startsWith(value)
        })
        break
    }
  }

  reset(id = 1, popup?: Popup): void {
    setTimeout(() => {
      switch (id) {
        case 1:
          this.users1 = this._users
          break
        case 2:
          this.users2 = this._users
          break
        case 3:
          this.users3 = this._users
          break
        case 4:
          this.users4 = this._users
          break
      }
    }, 100)

    if (isCombobox(popup)) {
      popup.reset()
    }
  }

  saveValue(value: string | string[]): void {
    console.log('Value:', value)
  }

  logItems(items: { value: InputSignal<string> }[]): void {
    console.log(
      'items:',
      items.map((x) => x.value())
    )
  }
}
