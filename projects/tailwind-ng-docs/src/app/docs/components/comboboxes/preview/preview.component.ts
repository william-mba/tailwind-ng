import { Pipe, PipeTransform, WritableSignal } from '@angular/core';
import { Component, computed, signal } from '@angular/core';
import { ComboboxSelectionMode, isCombobox, Popup } from '@tailwind-ng/core';
import { TwAvatar, TwButton, TwComboboxModule, TwDropdown, TwIcon, TwInputText, TwToggle } from 'tailwind-ng';

interface User {
  image?: string;
  name: string;
  status?: 'active' | 'inactive';
}

@Pipe({ name: 'string', pure: false })
export class StringPipe implements PipeTransform {

  transform(value: Set<string>): string {
    return `[ ${[...value].join(', ')} ] (${value.size})`;
  }
}

@Component({
  selector: 'app-comboboxes-preview',
  imports: [TwIcon, TwComboboxModule, TwDropdown, TwButton, TwInputText, TwAvatar, TwToggle, StringPipe],
  templateUrl: './preview.component.html',
  styles: ``
})
export class PreviewComponent {

  selectionMode: Record<number, WritableSignal<ComboboxSelectionMode>> = {
    1: signal('single'),
    2: signal('single'),
    3: signal('multi'),
    4: signal('multi'),
    5: signal('multi'),
  };

  isSingleMode = (id = 1) => computed(() => this.selectionMode[id]() === 'single');

  protected toggleMode(id = 1): void {
    this.selectionMode[id].update(mode => mode === 'single' ? 'multi' : 'single');
  }

  get _users(): User[] {
    return [
      {
        image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Elizabeth Martinez',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'David Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Susan Wilson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Courtney Henry',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Tom Cook',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Charles Thomas',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Mary Taylor',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Christopher Moore',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Lindsay Walton',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'James Williams',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Linda Jones',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Barbara Garcia',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Whitney Francis',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Leonard Krasner',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Floyd Miles',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emily Selman',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Kristin Watson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emma Dorsey',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Jane Smith',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Patricia Brown',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Ronald Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Anthony Lewis',
        status: 'active'
      },
    ]
  };

  users1: User[] = this._users;
  users2: User[] = this._users;
  users3: User[] = this._users;
  users4: User[] = this._users;
  users5: User[] = this._users;

  private checkMatch = (x: string, y: string) => {
    x = x.toLocaleLowerCase();
    y = y.toLocaleLowerCase();
    return x.includes(y) || x.startsWith(y)
  };

  filter(value: string, id = 1): void {
    switch (id) {
      case 1:
        this.users1 = this._users.filter((x) => this.checkMatch(x.name, value));
        break;
      case 2:
        this.users2 = this._users.filter((x) => this.checkMatch(x.name, value));
        break;
      case 3:
        this.users3 = this._users.filter((x) => this.checkMatch(x.name, value));
        break;
      case 4:
        this.users4 = this._users.filter((x) => this.checkMatch(x.name, value));
        break;
      case 5:
        this.users5 = this._users.filter((x) => this.checkMatch(x.name, value));
        break;
    }
  }

  reset(id = 1, popup?: Popup): void {
    setTimeout(() => {
      switch (id) {
        case 1:
          this.users1 = this._users;
          break;
        case 2:
          this.users2 = this._users;
          break;
        case 3:
          this.users3 = this._users;
          break;
        case 4:
          this.users4 = this._users;
          break
        case 5:
          this.users5 = this._users;
          break
      }
    }, 100);

    if (isCombobox(popup)) {
      popup.reset();
    }
  }

  selections: Record<number, Set<string>> = {
    1: new Set(['Elizabeth Martinez']),
    2: new Set(['Courtney Henry']),
    3: new Set<string>(['Tom Cook', 'Elizabeth Martinez', 'Courtney Henry']),
    4: new Set(['Tom Cook', 'James Williams', 'Charles Thomas', 'Leonard Krasner', 'Patricia Brown', 'Barbara Garcia']),
    5: new Set(['Tom Cook', 'Kristin Watson', 'John Doe', 'Patricia Brown', 'Linda Jones', 'Floyd Miles']),
  };
}
