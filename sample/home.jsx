import { h, Component } from "preact";
import {
  Button,
  Fab,
  Icon,
  Switch,
  Snackbar,
  Checkbox,
  Radio,
  Textfield,
  Card,
  Select,
  Elevation,
  Dialog,
  List,
  Drawer,
  Toolbar,
  LayoutGrid
} from "../";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      chosenOption: 2
    };
  }
  render() {
    return (
      <div>
        <Toolbar>
          <Toolbar.Row>
            <Toolbar.Section>
              <Toolbar.Icon>menu</Toolbar.Icon>
              <Toolbar.Title>Hi</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>

        <Drawer.TemporaryDrawer
          ref={drawer => {
            this.drawer = drawer;
          }}
        >
          <Drawer.TemporaryDrawerHeader>
            Hello Header
          </Drawer.TemporaryDrawerHeader>
          <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
          <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
        </Drawer.TemporaryDrawer>

        <Button
          raised={true}
          accent={true}
          ripple={true}
          onClick={e => {
            this.drawer.MDComponent.open = true;
          }}
        >
          hi
        </Button>

        <div>
          <Fab mini={true} ripple={true}>
            <Icon>share</Icon>
          </Fab>
          <Switch />
        </div>

        <Snackbar
          ref={bar => {
            this.bar = bar;
          }}
        />

        <div>
          <div className="mdc-form-field">
            <Checkbox
              ref={inp => {
                this.inp = inp;
              }}
            />
          </div>
        </div>

        <div className="mdc-form-field">
          <Radio id="rd" ref={radio => (this.radio = radio)} />
          {" "}
          <label for="rd">Radio Box</label>
        </div>

        <Textfield label="hello" fullwidth={true} required />

        <LayoutGrid>
          <LayoutGrid.Cell cols={6} tabletCols={8} phoneCols={12}>
            <Card>
              <Card.Primary>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Subtitle</Card.Subtitle>
              </Card.Primary>
              <Card.SupportingText>
                This card is displayed within a layout grid.
              </Card.SupportingText>
              <Card.Actions>
                <Card.Action>Action</Card.Action>
              </Card.Actions>
            </Card>
          </LayoutGrid.Cell>
        </LayoutGrid>

        <Elevation z="9">
          hi
        </Elevation>

        <Dialog
          ref={dlg => {
            this.dlg = dlg;
          }}
        >
          <Dialog.Header>Hello Dialog</Dialog.Header>
          <Dialog.Body>What is this Dialog stuff??</Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton>No</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Yes</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>

        <Select
          hintText="Select an option"
          ref={presel => {
            this.presel = presel;
          }}
          selectedIndex={this.state.chosenOption}
          onChange={() => {
            this.setState({
              chosenOption: this.presel.MDComponent.selectedIndex
            });
          }}
        >
          <Select.Item>opt1</Select.Item>
          <Select.Item>opt2</Select.Item>
          <Select.Item>opt3</Select.Item>
          <Select.Item>opt4</Select.Item>
        </Select>

        <div>
          <Select basic={true}>
            <option value="" default selected>Pick a food</option>
            <option value="grains">Bread, Cereal, Rice, and Pasta</option>
            <option value="vegetables">Vegetables</option>
            <optgroup label="Fruits">
              <option value="apple">Apple</option>
              <option value="oranges">Orange</option>
              <option value="banana">Banana</option>
            </optgroup>
            <option value="dairy">Milk, Yogurt, and Cheese</option>
            <option value="meat">
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </option>
            <option value="fats">Fats, Oils, and Sweets</option>
          </Select>
        </div>

        <List>
          <List.Item>Item1</List.Item>
          <List.Item>Item2</List.Item>
          <List.Item>Item3</List.Item>
        </List>

        <hr />

        <List interactive={true}>
          <List.LinkItem ripple={true} href="#">
            <List.ItemIcon>menu</List.ItemIcon>
            Item1
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#">
            <List.ItemAvatar
              src="https://material-components-web.appspot.com/images/animal1.svg"
              height="25"
              width="25"
            />
            Item2
          </List.LinkItem>
          <List.Divider />
          <List.LinkItem ripple={true} href="#">Item3</List.LinkItem>
        </List>
      </div>
    );
  }
}
