#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp float;

precision highp int;

void main()
{
 float data[10] = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int i = 1; i < 10; i ++)
  {
   data[i] = injectionSwitch.y;
  }
 for(int i = 0; i < 9; i ++)
  {
   bool checkSwap_inline_return_value_0 = true;
   float a = 1.0;
   a = data[i];
   checkSwap_inline_return_value_0 = a < 1.0;
   bool doSwap = true;
   doSwap = checkSwap_inline_return_value_0;
   if(doSwap)
    {
     data[i] = 1.0;
     return;
    }
  }
}
