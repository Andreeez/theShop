const AdminOptionComponent = {

    props: ['option'],

    template: `
    <option :value=option._id>
        {{option.name}}
    </option>
    `
}