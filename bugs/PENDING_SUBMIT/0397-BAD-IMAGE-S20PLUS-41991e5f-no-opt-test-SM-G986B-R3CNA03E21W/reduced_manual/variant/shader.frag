#version 320 es

precision highp int;

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

struct struct_base {
 int data;
 int leftIndex;
 int rightIndex;
} ;

struct_base struct_a[10] = struct_base[10](
                            struct_base(1, - 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1),
                            struct_base(1, 1, 1)
                            );

void func_a(inout struct_base struct_a, int input_a)
{
 struct_a.data = 1;
}
void func_b(int input_b, int input_a)
{
 int var_a = 0;
 int var_b = 0;
 // Always true. Iterates 6 times,
 // but returns nothing on first iteration.
 while(1 <= 1)
  {
   if(var_b >= 5)
    {
     break;
    }
   var_b ++;
   // Clamp returns 0. Struct_a[0].leftIndex == -1.
   // Always true.
   if(struct_a[clamp(var_a, 0, 10 - 1)].leftIndex == - 1)
    {
     func_a(struct_a[1], 1);
     return;
    }
   else
   // this is never reached
    {
     var_a = 1;
     continue;
    }
  }
}
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
float compute_value(float limit, float thirty_two)
{
 float result = - 0.5;
 for(int i = 1; i < 800; i ++)
  {
   if((i % 32) == 0)
    {
     result += 0.4;
    }
   else
    {
     if(mod(float(i), round(thirty_two)) <= 0.01)
      {
       result += 100.0;
      }
    }
   // This function has no effect to the rest of the shader.
   // Variant shader is semantically same as reference shader.
   func_b(1, 1);
   if(float(i) >= limit)
    {
     return result;
    }
  }
 return result;
}
void main()
{
 vec3 c = vec3(7.0, 8.0, 9.0);
 float thirty_two = round(resolution.x / 8.0);
 c.x = compute_value(gl_FragCoord.x, thirty_two);
 c.y = compute_value(gl_FragCoord.y, thirty_two);
 c.z = c.x + c.y;
 for(int i = 0; i < 3; i ++)
  {
    // Always false.
   if((injectionSwitch.x > injectionSwitch.y))
    {
     discard;
    }
   if(c[i] >= 1.0)
    {
     c[i] = c[i] * c[i];
    }
  }
 _GLF_color = vec4(normalize(abs(c)), 1.0);
}
