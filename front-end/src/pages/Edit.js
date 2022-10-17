import { Button, FormGroup, Form, Input, Label, Container } from "reactstrap";

function Edit() {
  return (
    <>
      <Container>
        <h1>Form Edit</h1>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value="fathur@yahoo.com"
              placeholder="email"
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              value="fathur_wota"
              placeholder="username"
              name="username"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              value="fahwedfqdq"
              placeholder="password"
              name="password"
            />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <Input
              type="number"
              value="69"
              placeholder="experience"
              name="exp"
            />
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

export default Edit;
