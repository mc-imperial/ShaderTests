#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 float x2 = 1.0;
 float B = 1.0;
 float C = 1.0;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   float fx_inline_return_value_1 = 1.0;
   float x = 1.0;
   x = x2;
   float fx_return_value = 1.0;
   if(gl_FragCoord.y < 1.0)
    {
     fx_return_value = dFdx(x);
    }
   fx_inline_return_value_1 = fx_return_value;
   float k0 = 1.0;
   k0 = fx_inline_return_value_1;
   B = k0;
   float fx_inline_return_value_0 = 1.0;
   {
    float x = 1.0;
    x = x2;
    float fx_return_value = 1.0;
    fx_return_value = dFdx(x);
    fx_inline_return_value_0 = fx_return_value;
   }
   C = fx_inline_return_value_0;
   x2 = (C / B);
  }
}
