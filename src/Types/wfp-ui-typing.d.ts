// Type definitions for @wfp/ui
// Project: https://github.com/rma-consulting/react-easy-chart
// Definitions by: Mohammed Melhem <https://github.com/@4m-world>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 1.0

declare module "@wfp/ui" {
  import * as React from "react";

  type ButtonKind =
    | "primary"
    | "secondary"
    | "accent"
    | "danger"
    | "ghost"
    | "inverse--primary"
    | "inverse"
    | "danger--primary"
    | "tertiary"
    | "navigation";

  type ButtonType = "button" | "reset" | "submit";

  interface IconProps {
    width: string;
    height: string;
    viewBox: string;
    svgData: object;
  }

  interface BaseComponentProps {
    children?: React.ReactNode | undefined;
    className?: string;
  }

  interface StyledComponentProps extends BaseComponentProps {
    style?: React.CSSProperties | undefined;
  }

  interface ButtonProps extends StyledComponentProps {
    onClick?: any;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    kind?: ButtonKind;
    href?: string;
    tabIndex?: number = 0;
    type?: ButtonType = "button";
    role?: string;
    icon?: IconProps;
    iconDescription?: any;
    iconReverse?: boolean;
    draggable?: boolean;
    onDragStart?: any;
    onBlur?: any;
  }

  interface AnchorNavigationProps extends BaseComponentProps {
    title: string;
  }

  interface BannerNavigationProps extends BaseComponentProps {
    pageWidth?: PageWidth;
  }

  interface BlockquoteProps extends BaseComponentProps {
    code?: boolean;
    light?: boolean;
    toggleable?: boolean;
    kind?: string;
    title?: React.ReactElement;
    type?: "info" | "warning" | "error" | "success";
    withIcon?: boolean;
    info?: any;
    icon?: IconProps | React.ReactNode;
    style?: any;
  }

  interface FooterProps extends BaseComponentProps {
    external?: boolean;
    metaContent?: React.ReactNode | string;
    logo?: React.ReactNode | string;
    logoExtended?: React.ReactNode | string;
    pageWidth?: PageWidth;
    sdgLogo?: React.ReactNode;
    subTitle?: React.ReactNode;
  }

  export class AuthLayout extends React.Component<any, any> {}

  export class AnchorNavigation extends React.Component<
    AnchorNavigationProps,
    any
  > {}

  export class BackgroundContent extends React.Component<any, any> {}

  export class BannerNavigation extends React.Component<
    BannerNavigationProps,
    any
  > {}
  export class BannerNavigationItem extends React.Component<
    BaseComponentProps,
    any
  > {}

  export class Blockquote extends React.Component<BlockquoteProps, any> {}

  export class Breadcrumb extends React.Component<any, any> {}
  export class BreadcrumbHome extends React.Component<any, any> {}
  export class BreadcrumbItem extends React.Component<any, any> {}

  export class Button extends React.Component<ButtonProps, any> {}

  export class Switch extends React.Component<any, any> {}
  export class Card extends React.Component<any, any> {}
  export class Checkbox extends React.Component<any, any> {}
  export class ContextMenu extends React.Component<any, any> {}
  export class ContextMenuItem extends React.Component<any, any> {}
  export class ContentSwitcher extends React.Component<any, any> {}
  export class Credits extends React.Component<any, any> {}
  export class DateRangePickerInput extends React.Component<any, any> {}
  export class Empty extends React.Component<any, any> {}
  export class Form extends React.Component<any, any> {}
  export class FormError extends React.Component<any, any> {}
  export class FormGroup extends React.Component<any, any> {}
  export class FormHint extends React.Component<any, any> {}
  export class FormLabel extends React.Component<any, any> {}
  export class FormWizard extends React.Component<any, any> {}
  export class Footer extends React.Component<FooterProps, any> {}
  export class Hero extends React.Component<any, any> {}
  export class Icon extends React.Component<any, any> {}
  export class InfoBar extends React.Component<any, any> {}
  export class InlineLoading extends React.Component<any, any> {}
  export class InlineNotification extends React.Component<any, any> {}
  export class Input extends React.Component<any, any> {}
  export class InputGroup extends React.Component<any, any> {}
  export class Item extends React.Component<any, any> {}
  export class Link extends React.Component<any, any> {}
  export class List extends React.Component<any, any> {}
  export class ListItem extends React.Component<any, any> {}
  export class Loading extends React.Component<any, any> {}
  export class MainNavigation extends React.Component<any, any> {}
  export class MainNavigationItem extends React.Component<any, any> {}
  export class Modal extends React.Component<any, any> {}
  export class ModalWrapper extends React.Component<any, any> {}
  export class Module extends React.Component<any, any> {}
  export class ModuleBody extends React.Component<any, any> {}
  export class ModuleHeader extends React.Component<any, any> {}
  export class ModuleFooter extends React.Component<any, any> {}
  export class NotificationActionButton extends React.Component<any, any> {}
  export class NotificationButton extends React.Component<any, any> {}
  export class NotificationTextDetails extends React.Component<any, any> {}
  export class NotificationIcon extends React.Component<any, any> {}
  export class notificationStyle extends React.Component<any, any> {}
  export class NumberInput extends React.Component<any, any> {}
  export class Pagination extends React.Component<any, any> {}
  export class RadioButton extends React.Component<any, any> {}
  export class RadioButtonGroup extends React.Component<any, any> {}
  export class ReadMore extends React.Component<any, any> {}
  export class Search extends React.Component<any, any> {}
  export class SecondaryNavigation extends React.Component<any, any> {}
  export class SecondaryNavigationTitle extends React.Component<any, any> {}
  export class Select extends React.Component<any, any> {}
  export class SelectItem extends React.Component<any, any> {}
  export class SelectItemGroup extends React.Component<any, any> {}
  export class Sidebar extends React.Component<any, any> {}
  export class SidebarHeader extends React.Component<any, any> {}
  export class SidebarBackButton extends React.Component<any, any> {}
  export class SidebarScroll extends React.Component<any, any> {}
  export class SingleDatePickerInput extends React.Component<any, any> {}
  export class SkeletonText extends React.Component<any, any> {}
  export class Slider extends React.Component<any, any> {}
  export class StepNavigation extends React.Component<any, any> {}
  export class StepNavigationItem extends React.Component<any, any> {}
  export class Story extends React.Component<any, any> {}
  export class SubNavigation extends React.Component<any, any> {}
  export class SubNavigationContent extends React.Component<any, any> {}
  export class SubNavigationFilter extends React.Component<any, any> {}
  export class SubNavigationGroup extends React.Component<any, any> {}
  export class SubNavigationHeader extends React.Component<any, any> {}
  export class SubNavigationItem extends React.Component<any, any> {}
  export class SubNavigationLink extends React.Component<any, any> {}
  export class SubNavigationList extends React.Component<any, any> {}
  export class SubNavigationTitle extends React.Component<any, any> {}
  export class Tab extends React.Component<any, any> {}
  export class Table extends React.Component<any, any> {}
  export class TablePagination extends React.Component<any, any> {}
  export class Tabs extends React.Component<any, any> {}

  declare type TagType = "info" | "error" | "success" | "warning" | "custom";

  interface TagProps extends React.HtmlHTMLAttributes {
    wrap?: boolean;
    type?: TagType;
    children: React.ReactNode;
  }

  export class Tag extends React.Component<TagProps, any> {}
  export class Text extends React.Component<any, any> {}
  export class TextArea extends React.Component<any, any> {}

  interface TextInputProps extends React.InputHTMLAttributes {
    id?: string;
    onMouseLeave?: any;
    helperText?: string;
    labelText?: string;
    defaultValue?: string;
    formItemClassName?: string;
    hideLabel?: boolean;
    placeholder?: string;
    invalid?: boolean | object;
    invalidText?: string;
    type?: string;
    onClick?: React.MouseEventHandler;
    onChange?: any;
    onBlur?: any;
    disabled?: any;
    value?: string | number;
    className?: string;
    required?: boolean;
    step?: number | string;
    readOnly?: boolean;
    min?: number | string;
    style?: any;
  }

  export class TextInput extends React.Component<TextInputProps, any> {}
  export class ToastNotification extends React.Component<any, any> {}
  export class Toggle extends React.Component<any, any> {}
  export class Tooltip extends React.Component<any, any> {}
  export class tooltipStyle extends React.Component<any, any> {}
  export class Unit extends React.Component<any, any> {}
  export class User extends React.Component<any, any> {}

  interface ValueProps extends BaseComponentProps {
    secondaryValue: React.ReactNode;
    title: React.ReactNode;
    value: React.ReactNode;
  }

  export class Value extends React.Component<ValueProps, any> {}

  interface WrapperProps extends BaseComponentProps {
    style?: React.CSSProperties | undefined;
    pageWidth?: PageWidth;
    mobilePageWidth?: PageWidth | string;
    spacing?: Spacing;
  }
  export class Wrapper extends React.Component<WrapperProps, any> {}
}
