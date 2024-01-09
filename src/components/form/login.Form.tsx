import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { loginApi } from '../../apis/auth/auth';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .trim()
        .required('ユーザー名が入力されていません')
        .min(3, 'Username ít nhất phải 3 ký tự.')
        .max(30, ' nhất phải 8 ký tự'),
      password: Yup.string()
        .trim()
        .required('パスワードが入力されていません')
        .min(6, 'Mật khẩu ít nhất phải 8 ký tự.')
        .matches(/(?=.*[0-9])/, 'Mật khẩu phải chứa ít nhất một số.'),
    }),
    onSubmit: (values) => {
      try {
        const res = loginApi(values);
        console.log(res);
        
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div id="login-form">
      <Box component="form" onSubmit={formik.handleSubmit} noValidate>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-usename">ユーザー名</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">{<AccountBoxIcon />}</IconButton>
              </InputAdornment>
            }
            id="username"
            label="ユーザー名"
            type="text"
            error={Boolean(formik.errors.username && formik.touched.username)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <FormHelperText id="helper-text-user" error>
            {formik.errors.username}
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">パスワード</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            id="password"
            label="パスワード"
            type={showPassword ? 'text' : 'password'}
            error={Boolean(formik.errors.password && formik.touched.password)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <FormHelperText id="helper-text-pass" error>
            {formik.errors.password}
          </FormHelperText>
        </FormControl>
        <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 1 }}>
          ログイン
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
