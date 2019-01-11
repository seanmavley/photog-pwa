import { trigger, animate, style, group, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),

    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.2s cubic-bezier(.87,.06,.42,1.04)', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.2s cubic-bezier(.87,.06,.42,1.04)', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ])
]);

export const ngListTransition = trigger('listAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], { optional: true })
  ])
]);
