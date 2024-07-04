import { ButtonConfig } from "ngx-twcss";

export const CustomButtonConfig: Partial<ButtonConfig> = {
  primary: {
    theme: {
      bgColor: 'bg-rose-500'
    }
  },
  tonal: {
    theme: {
      bgColor: 'bg-rose-600',
      textColor: 'text-rose-500',
    }
  }
}

export const CustomButtonConfig2: Partial<ButtonConfig> = {
  primary: {
    theme: {
      bgColor: 'bg-orange-600'
    }
  },
  tonal: {
    theme: {
      bgColor: 'bg-orange-600',
      textColor: 'text-orange-500',
    }
  }
}

export const CustomButtonConfig3: Partial<ButtonConfig> = {
  primary: {
    theme: {
      bgColor: 'bg-lime-600'
    }
  },
  tonal: {
    theme: {
      bgColor: 'bg-lime-600',
      textColor: 'text-lime-500',
    }
  }
}
