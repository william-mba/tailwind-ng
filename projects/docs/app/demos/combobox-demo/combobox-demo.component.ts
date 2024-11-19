import { Component } from '@angular/core';
import { ComboboxItemState } from 'ngxtw';
import { COMBOBOX_DEMO_SAMPLE } from './combobox-demo.sample';

interface ComboboxItem extends Partial<ComboboxItemState> {
  image?: string;
  status?: 'active' | 'inactive';
}

@Component({
  selector: 'app-combobox-demo',
  templateUrl: './combobox-demo.component.html'
})
export class ComboboxDemoComponent {
  get _items(): ComboboxItem[] {
    return [
      {
        image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Elizabeth Martinez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'David Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Susan Wilson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Courtney Henry',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Tom Cook',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Charles Thomas',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Mary Taylor',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Christopher Moore',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Lindsay Walton',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'James Williams',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Linda Jones',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Barbara Garcia',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Whitney Francis',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Leonard Krasner',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Floyd Miles',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Emily Selman',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Kristin Watson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Emma Dorsey',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'John Doe',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Jane Smith',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Patricia Brown',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Ronald Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        value: 'Anthony Lewis',
        status: 'active'
      },
    ]
  };

  items1: ComboboxItem[] = this._items;
  items2: ComboboxItem[] = this._items;
  items3: ComboboxItem[] = this._items;
  items4: ComboboxItem[] = this._items;


  sample = COMBOBOX_DEMO_SAMPLE;

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   })
    // }, 500);
  }

  filter(value: string, id: number): void {
    switch (id) {
      case 1:
        this.items1 = this._items.filter((item) => {
          return item.value?.includes(value) || item.value?.startsWith(value);
        });
        break;
      case 2:
        this.items2 = this._items.filter((item) => {
          return item.value?.includes(value) || item.value?.startsWith(value);
        });
        break;
      case 3:
        this.items3 = this._items.filter((item) => {
          return item.value?.includes(value) || item.value?.startsWith(value);
        });
        break;
      case 4:
        this.items4 = this._items.filter((item) => {
          return item.value?.includes(value) || item.value?.startsWith(value);
        });
        break;
    }
  }

  reset(id: number): void {
    switch (id) {
      case 1:
        this.items1 = this._items;
        break;
      case 2:
        this.items2 = this._items;
        break;
      case 3:
        this.items3 = this._items;
        break;
      case 4:
        this.items4 = this._items;
        break
    }
  }
}
