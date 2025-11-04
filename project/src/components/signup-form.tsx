import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Hesap Oluştur</CardTitle>
        <CardDescription>
          Hesabınızı oluşturmak için aşağıdaki bilgilerinizi girin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Ad Soyad</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                Bunu sizinle iletişime geçmek için kullanacağız. E-postanızı
                başka kimseyle paylaşmayacağız.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                En az 8 karakter uzunluğunda olmalıdır.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">Şifreyi Onayla</FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Lütfen şifrenizi onaylayın.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" variant="outline">
                  Hesap Oluştur
                </Button>
                <Button variant="outline" type="button">
                  Google ile kayıt ol
                </Button>
                <FieldDescription className="px-6 text-center">
                  Hesabın var mı?
                  {/* <a href="#">Sign in</a> */}
                  <Link to={"/login"}> Giriş yap</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
