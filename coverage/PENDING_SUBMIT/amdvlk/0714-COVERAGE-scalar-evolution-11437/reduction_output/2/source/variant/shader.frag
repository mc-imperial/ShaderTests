#version 320 es

precision highp float;

precision highp int;

// Contents of one: 1
layout(push_constant) uniform buf_push {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = 100;
 do
  {
   if(one < 1)
    {
     break;
    }
   a --;
  }
 while(a > 1);
 if(a == 1)
  {
   _GLF_color = vec4(1, 0, 0, 1);
  }
 else
  {
   _GLF_color = vec4(0);
  }
}
