import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SideBarAnimations } from '@App/components/navigation/sidebar/enum';

export const sidebarAnimation = trigger('sidebarAnimation', [
  state(
    SideBarAnimations.OPEN,
    style({
      width: '200px',
    })
  ),
  state(
    SideBarAnimations.CLOSED,
    style({
      width: '60px',
    })
  ),
  transition(`${SideBarAnimations.OPEN} <=> ${SideBarAnimations.CLOSED}`, [
    animate('300ms'),
  ]),
]);
