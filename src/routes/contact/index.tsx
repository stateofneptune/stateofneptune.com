import type { ClassList } from "@builder.io/qwik";
import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";

import type {
  InitialValues,
  SubmitHandler,
  FieldStore,
  FieldElementProps,
} from "@modular-forms/qwik";

import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";

import Title from "~/components/title/title";

import { email, maxLength, minLength, object, string } from "valibot";
import type { Input } from "valibot";

const ContactSchema = object({
  name: string([minLength(1, "Please enter your name.")]),
  email: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  subject: string([minLength(1, "Please enter the subject.")]),
  message: string([
    minLength(1, "Please enter the body of the message."),
    maxLength(
      700,
      ({ input }) =>
        `Message can't exceed 700 characters; issued: ${(input as string).length}.`,
    ),
  ]),
});

type ContactForm = Input<typeof ContactSchema>;

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  name: "",
  email: "",
  subject: "",
  message: "",
}));

export const useFormAction = formAction$<ContactForm>(async (values) => {
  console.log(values);
}, valiForm$(ContactSchema));

export default component$(() => {
  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(ContactSchema),
  });

  const inputFactory =
    <T extends keyof ContactForm>(
      type: string,
      name: T,
      label: string,
      textarea: boolean = false,
    ) =>
    (
      field: FieldStore<ContactForm, T>,
      props: FieldElementProps<ContactForm, T>,
    ) => (
      <>
        <div>
          <label for={name} class={labelClass(true)}>
            {label}
          </label>

          {textarea ? (
            <textarea
              {...props}
              id={name}
              rows={4}
              value={field.value}
              class={inputClass(!!field.error)}
            />
          ) : (
            <input
              {...props}
              id={name}
              type={type}
              value={field.value}
              class={inputClass(!!field.error)}
            />
          )}

          {field.error && (
            <div class="font-body text-sm text-warn">{field.error}</div>
          )}
        </div>
      </>
    );

  const nav = useNavigate();

  const handleSubmit = $<SubmitHandler<ContactForm>>(() => {
    nav("/contact/success/");
  });

  const inputClass: (error: boolean) => ClassList = (error) => [
    "w-full min-w-[15ch] rounded-sm bg-deep-bg px-3 py-1.5 font-body text-body ring-1 ring-inset-0 ring-light-bg autofill:delay-[50000s] autofill:transition-[background-color] autofill:text-fill-body focus-within:ring-inset focus-within:ring-2",
    error
      ? "ring-warn focus-within:ring-warn"
      : "ring-light-bg focus-within:ring-accent",
  ];

  const labelClass: (required: boolean) => ClassList = (required) => [
    "font-body text-body",
    required && "after:text-warn after:content-['_*']",
  ];

  return (
    <>
      <Title>Contact us</Title>

      <section class="my-12 px-6">
        <section class="flex w-full justify-center">
          <div class="w-[40ch]">
            <Form onSubmit$={handleSubmit}>
              <div class="space-y-6">
                <Field name="email">
                  {inputFactory("email", "email", "Email")}
                </Field>

                <div class="flex flex-wrap gap-x-2 gap-y-6">
                  <div class="flex-grow basis-1/3">
                    <Field name="name">
                      {inputFactory("text", "name", "Name")}
                    </Field>
                  </div>

                  <div class="flex-grow basis-1/3">
                    <Field name="subject">
                      {inputFactory("text", "subject", "Subject")}
                    </Field>
                  </div>
                </div>

                <Field name="message">
                  {inputFactory("text", "message", "Message", true)}
                </Field>

                <div class="font-body text-sm text-dim before:font-body before:text-warn before:content-['*_']">
                  Required field
                </div>

                <div class="flex w-full justify-center">
                  <button
                    class={[
                      "font-body",
                      !contactForm.submitting
                        ? "text-body transition-colors focus-within:text-accent hover:text-accent"
                        : "pointer-events-none text-dim",
                    ]}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's contact page.";

export const head: DocumentHead = {
  title: "Contact",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    }),
  ),
};
