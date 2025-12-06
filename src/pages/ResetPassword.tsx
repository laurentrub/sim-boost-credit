import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const { t } = useTranslation();
  const { updatePassword, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  // Redirect to auth page if no user session (invalid or expired token)
  useEffect(() => {
    if (!user) {
      toast.error(t('auth.resetLinkExpired'));
      navigate('/auth');
    }
  }, [user, navigate, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error(t('profile.passwordMismatch'));
      return;
    }

    if (passwords.newPassword.length < 6) {
      toast.error(t('profile.passwordTooShort'));
      return;
    }

    setLoading(true);

    const { error } = await updatePassword(passwords.newPassword);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(t('profile.passwordUpdateSuccess'));
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{t('auth.resetPassword')}</CardTitle>
            <CardDescription>
              {t('auth.enterNewPassword')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">{t('profile.newPassword')}</Label>
                <Input
                  id="new-password"
                  type="password"
                  required
                  minLength={6}
                  value={passwords.newPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPassword: e.target.value })
                  }
                  placeholder={t('auth.minCharacters', { count: 6 })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t('profile.confirmPassword')}</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  minLength={6}
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirmPassword: e.target.value })
                  }
                  placeholder={t('auth.confirmPasswordPlaceholder')}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t('common.updating') : t('auth.resetPasswordButton')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
