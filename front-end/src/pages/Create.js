import { Button, FormGroup, Form, Input, Label, Container } from "reactstrap";

function Create() {
  return (
    <>
      <Container>
        lp;
        <h1>Form Register</h1>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" placeholder="username" name="username" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="password" name="password" />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input type="number" placeholder="experience" name="exp" />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button color="danger" type="reset">
            Reset
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Create;
