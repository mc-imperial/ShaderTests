#version 310 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

precision highp int;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_dead14gl_FragCoord;

vec4 GLF_dead14_GLF_color;

vec2 GLF_dead14injectionSwitch = vec2(0.98497945, 0.82953477);

vec2 GLF_dead14resolution = vec2(0.73187816, 0.4700693);

bool GLF_dead14checkSwap(float GLF_dead14a, float GLF_dead14b)
{
 return GLF_dead14gl_FragCoord.y < GLF_dead14resolution.y / 2.0 ? GLF_dead14a > GLF_dead14b : GLF_dead14a < GLF_dead14b;
}
precision highp float;

precision highp int;

mediump vec4 GLF_dead16gl_FragCoord;

vec4 GLF_dead16_GLF_color;

vec2 GLF_dead16resolution = vec2(0.655177, 0.13158286);

vec3 GLF_dead16pickColor(int GLF_dead16i)
{
 return vec3(float(GLF_dead16i) / 50.0, float(GLF_dead16i) / 120.0, float(GLF_dead16i) / 140.0);
}
vec3 GLF_dead16mand(float GLF_dead16xCoord, float GLF_dead16yCoord)
{
 float GLF_dead16height = GLF_dead16resolution.y;
 float GLF_dead16width = GLF_dead16resolution.x;
 float GLF_dead16xpos = GLF_dead16xCoord * 0.1 + (GLF_dead16resolution.x * 0.6);
 float GLF_dead16ypos = GLF_dead16yCoord * 0.1 + (GLF_dead16resolution.y * 0.4);
 float GLF_dead16c_re = 0.8 * (GLF_dead16xpos - GLF_dead16width / 2.0) * 4.0 / GLF_dead16width - 0.4;
 float GLF_dead16c_im = 0.8 * (GLF_dead16ypos - GLF_dead16height / 2.0) * 4.0 / GLF_dead16width;
 float GLF_dead16x = 0.0, GLF_dead16y = 0.0;
 if(0.0 > GLF_dead16resolution.x)
  {
   GLF_dead16x = 1.0;
   GLF_dead16y = 1.0;
  }
 int GLF_dead16iteration = bitfieldReverse(int(GLF_dead16x));
 int GLF_dead16k = bitfieldExtract(int(GLF_dead16y), bitCount(int(GLF_dead16x)), int(GLF_dead16y));
 int GLF_dead16iterationCap = 1000;
 do
  {
   if(GLF_dead16x * GLF_dead16x + GLF_dead16y * GLF_dead16y > 4.0)
    {
     break;
    }
   float GLF_dead16x_new = GLF_dead16x * GLF_dead16x - GLF_dead16y * GLF_dead16y + GLF_dead16c_re;
   GLF_dead16y = 2.0 * GLF_dead16x * GLF_dead16y + GLF_dead16c_im;
   GLF_dead16x = GLF_dead16x_new;
   GLF_dead16iteration ++;
   GLF_dead16k ++;
  }
 while(GLF_dead16k < bitfieldInsert(GLF_dead16iterationCap + (257.0 > GLF_dead16resolution.y ? 1 : 0), 0, 0, 0));
 if(0.0 > GLF_dead16resolution.y)
  {
   GLF_dead16iterationCap += 1;
  }
 if(GLF_dead16iteration < bitfieldInsert(GLF_dead16iterationCap, 0, 0, 0))
  {
   return GLF_dead16pickColor(GLF_dead16iteration);
  }
 else
  {
   return vec3(GLF_dead16xCoord / GLF_dead16resolution.x, 0.0, GLF_dead16yCoord / GLF_dead16resolution.y);
  }
}
precision highp float;

mediump vec4 GLF_dead15gl_FragCoord;

vec4 GLF_dead15_GLF_color;

vec2 GLF_dead15injectionSwitch = vec2(0.61676973, 0.31112593);

vec2 GLF_dead15resolution = vec2(0.49052835, 0.28422165);

bool GLF_dead15checkSwap(float GLF_dead15a, float GLF_dead15b)
{
 return GLF_dead15gl_FragCoord.y < GLF_dead15resolution.y / 2.0 ? GLF_dead15a > GLF_dead15b : GLF_dead15a < GLF_dead15b;
}
precision highp float;

mediump vec4 GLF_dead17gl_FragCoord;

vec4 GLF_dead17_GLF_color;

vec2 GLF_dead17injectionSwitch = vec2(0.11566341, 0.011505663);

layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_dead17resolution;
};
float GLF_dead17compute_derivative_x(float GLF_dead17v)
{
 return dFdx(GLF_dead17v) * GLF_dead17injectionSwitch.y;
}
float GLF_dead17compute_derivative_y(float GLF_dead17v)
{
 return dFdy(GLF_dead17v) * GLF_dead17injectionSwitch.y;
}
float GLF_dead17compute_stripe(float GLF_dead17v)
{
 return smoothstep(- .9, 1., (GLF_dead17v) / ((GLF_dead17injectionSwitch.y > GLF_dead17injectionSwitch.x) ? GLF_dead17compute_derivative_x(GLF_dead17v) : GLF_dead17compute_derivative_y(GLF_dead17v)));
}
precision highp float;

float GLF_dead11one = 0.33083707;

mat2 GLF_dead11m22;

mat2x3 GLF_dead11m23;

mat2x4 GLF_dead11m24;

mat3x2 GLF_dead11m32;

mat3 GLF_dead11m33;

mat3x4 GLF_dead11m34;

mat4x2 GLF_dead11m42;

mat4x3 GLF_dead11m43;

mat4 GLF_dead11m44;

precision highp float;

vec2 GLF_dead12injectionSwitch = vec2(0.4089216, 0.73309076);

struct GLF_dead12QuicksortObject {
 int numbers[10];
} ;

GLF_dead12QuicksortObject GLF_dead12obj;

void GLF_dead12swap(int GLF_dead12i, int GLF_dead12j)
{
 int GLF_dead12temp = GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead12i, 10)];
 GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead12i, 10)] = GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead12j, 10)];
 GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead12j, 10)] = GLF_dead12temp;
}
vec3 GLF_dead12palette(vec3 GLF_dead12a, vec3 GLF_dead12b, vec3 GLF_dead12c, vec3 GLF_dead12d)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](GLF_dead11one, GLF_dead11one, 126.694, 833.131, GLF_dead11one, 7.0, 1.8, 3.0, smoothstep(degrees(GLF_dead11one), 4.8, GLF_dead11one), mod(GLF_dead11one, GLF_dead11one)));
   int donor_replacementGLF_dead14i = _GLF_FUZZED(-85450);
   int donor_replacementGLF_dead14j = _GLF_FUZZED(-60253);
   {
    float GLF_dead14temp = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)];
    donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)] = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14j, 10)];
    donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14j, 10)] = GLF_dead14temp;
   }
  }
 return fract(mix(GLF_dead12d * GLF_dead12a, GLF_dead12a * GLF_dead12c, GLF_dead12b + GLF_dead12d - GLF_dead12c));
}
precision highp float;

mediump vec4 GLF_dead13gl_FragCoord;

vec4 GLF_dead13_GLF_color;

vec2 GLF_dead13resolution = vec2(0.26114345, 0.71490794);

struct GLF_dead13Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

precision highp float;

struct GLF_dead10QuicksortObject {
 int numbers[10];
} ;

GLF_dead10QuicksortObject GLF_dead10obj;

void GLF_dead10swap(int GLF_dead10i, int GLF_dead10j)
{
 int GLF_dead10temp = GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10i, 10)];
 GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10i, 10)] = GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10j, 10)];
 GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10j, 10)] = GLF_dead10temp;
}
int GLF_dead10performPartition(int GLF_dead10l, int GLF_dead10h)
{
 int GLF_dead10pivot = GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10h, 10)];
 int GLF_dead10i = (GLF_dead10l - 1);
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](distance(vec3(4062.7248, 544.994, -71.93), vec3(-221.148, -8.6, -54.23)), intBitsToFloat(-63029), GLF_dead11one, -258.376, -6989.7700, 84.40, 27.02, GLF_dead11one, smoothstep(GLF_dead11one, acosh(-310.035), atan(GLF_dead11one)), GLF_dead11one));
   {
    if(GLF_dead10pivot < GLF_dead10l + 1)
     {
      1;
     }
    bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10l, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10pivot, 10)]);
    if(GLF_dead15doSwap)
     {
      float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10l, 10)];
      donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10l, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10pivot, 10)];
      donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10pivot, 10)] = GLF_dead15temp;
     }
   }
  }
 for(int GLF_dead10j = GLF_dead10l; GLF_dead10j <= GLF_dead10h - 1; GLF_dead10j ++)
  {
   if(GLF_dead10obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10j, 10)] <= GLF_dead10pivot)
    {
     GLF_dead10i ++;
     GLF_dead10swap(GLF_dead10i, GLF_dead10j);
    }
  }
 GLF_dead10swap(GLF_dead10i + 1, GLF_dead10h);
 return (GLF_dead10i + 1);
}
precision highp float;

mediump vec4 GLF_dead6gl_FragCoord;

vec4 GLF_dead6_GLF_color;

layout(set = 0, binding = 2) uniform buf2 {
 vec2 GLF_dead6resolution;
};
struct GLF_dead6BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead6BST GLF_dead6tree[10];

void GLF_dead6makeTreeNode(inout GLF_dead6BST GLF_dead6tree, int GLF_dead6data)
{
 if(_GLF_DEAD(false))
  {
   vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16](vec3(-6714.9759, 8465.4546, 5.2), vec3(-4.8, -2.2, -163.512), vec3(16.55, -6.3, -12.59), vec3(890.560, -7881.4109, 9.0), mix(vec3(64.01, 510.035, -3.3), (mat3(7.8, -908.306, -0.8, -276.461, 1.8, 52.89, 123.021, -8.0, -971.978) * vec3(5.7, 1.2, -6724.3800)), vec3(-7989.4176, -458.935, 5246.4435)), (vec3(-4.1, 695.596, 910.233) + GLF_dead11one), vec3(-294.211, 95.81, -680.967), vec3(878.183, 3.3, 45.90), vec3(9532.6735, -50.32, 9.3), vec3(-4.5, -277.045, -42.15), vec3(-0.7, -306.406, 4.4), vec3(4.3, 609.250, 873.813), vec3(54.85, -84.03, -890.922), vec3(7583.4897, -2.8, 5520.6369), vec3(-2980.7347, -7231.7336, -83.79), vec3(-0.8, -575.043, -50.03)));
   int donor_replacementGLF_dead16i = _GLF_FUZZED(clamp(-37528, 96131, GLF_dead6data));
   vec3 donor_replacementGLF_dead16sum = _GLF_FUZZED(dFdy(vec3(-8.3, 97.29, 70.33)));
   {
    donor_replacementGLF_dead16sum += donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead16i, 16)];
   }
  }
 GLF_dead6tree.data = GLF_dead6data;
 GLF_dead6tree.leftIndex = - 1;
 GLF_dead6tree.rightIndex = - 1;
}
void GLF_dead6insert(int GLF_dead6treeIndex, int GLF_dead6data)
{
 int GLF_dead6baseIndex = 0;
 while(GLF_dead6baseIndex <= GLF_dead6treeIndex)
  {
   if(GLF_dead6data <= GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].data)
    {
     if(GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].leftIndex == - 1)
      {
       GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].leftIndex = GLF_dead6treeIndex;
       GLF_dead6makeTreeNode(GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6treeIndex, 10)], GLF_dead6data);
       return;
      }
     else
      {
       if(_GLF_DEAD(false))
        {
         {
          int GLF_dead10l = 0, GLF_dead10h = 9;
          int GLF_dead10stack[10];
          int GLF_dead10top = - 1;
          GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10l;
          GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10h;
          while(GLF_dead10top >= 0)
           {
            GLF_dead10h = GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10top --, 10)];
            GLF_dead10l = GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead10top --, 10)];
            if(_GLF_DEAD(false))
             {
              vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(vec3(69.32, 8.7, -8030.8782));
              vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(GLF_dead6resolution);
              {
               float GLF_dead17stripe = GLF_dead17compute_stripe(cos((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
               donor_replacementGLF_dead17col = mix(vec3(donor_replacementGLF_dead17uv.x, 0, 0.75), vec3(.8, .7, donor_replacementGLF_dead17uv.x), GLF_dead17stripe);
               GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
               return;
              }
             }
            int GLF_dead10p = GLF_dead10performPartition(GLF_dead10l, GLF_dead10h);
            if(GLF_dead10p - 1 > GLF_dead10l)
             {
              GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10l;
              GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10p - 1;
             }
            if(GLF_dead10p + 1 < GLF_dead10h)
             {
              GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10p + 1;
              GLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead10top, 10)] = GLF_dead10h;
             }
           }
         }
        }
       GLF_dead6baseIndex = GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].leftIndex;
       continue;
      }
    }
   else
    {
     if(GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].rightIndex == - 1)
      {
       GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].rightIndex = GLF_dead6treeIndex;
       GLF_dead6makeTreeNode(GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6treeIndex, 10)], GLF_dead6data);
       return;
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         {
          continue;
         }
        }
       GLF_dead6baseIndex = GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6baseIndex, 10)].rightIndex;
       continue;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         float donor_replacementGLF_dead17v = _GLF_FUZZED(float(GLF_dead6baseIndex));
         {
          dFdx(donor_replacementGLF_dead17v) * GLF_dead17injectionSwitch.y;
         }
        }
      }
     if(_GLF_DEAD(false))
      {
       int donor_replacementGLF_dead11cols = _GLF_FUZZED(GLF_dead6data);
       uint donor_replacementGLF_dead11matrix_number = _GLF_FUZZED(min(137065u, max(packUnorm2x16(GLF_dead6resolution), 58596u)));
       if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
        {
         float donor_replacementGLF_dead14a = _GLF_FUZZED(86.55);
         float donor_replacementGLF_dead14b = _GLF_FUZZED(3.6);
         {
          GLF_dead14gl_FragCoord.y < GLF_dead14resolution.y / 2.0 ? donor_replacementGLF_dead14a > donor_replacementGLF_dead14b : donor_replacementGLF_dead14a < donor_replacementGLF_dead14b;
         }
        }
       {
        for(int GLF_dead11rows = 2; GLF_dead11rows <= 4; GLF_dead11rows ++)
         {
          for(int GLF_dead11c = 0; GLF_dead11c < donor_replacementGLF_dead11cols; GLF_dead11c ++)
           {
            for(int GLF_dead11r = 0; GLF_dead11r < GLF_dead11rows; GLF_dead11r ++)
             {
              switch(donor_replacementGLF_dead11matrix_number)
               {
                case 0u:
                GLF_dead11m22[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
                if(_GLF_DEAD(false))
                 {
                  {
                   break;
                  }
                 }
                break;
                case 1u:
                GLF_dead11m23[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
                break;
                case 2u:
                GLF_dead11m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
                break;
                case 3u:
                GLF_dead11m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
                break;
                case 4u:
                GLF_dead11m33[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
                break;
                case 5u:
                GLF_dead11m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
                break;
                case 6u:
                GLF_dead11m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
                break;
                case 7u:
                GLF_dead11m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
                break;
                case 8u:
                GLF_dead11m44[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
                break;
               }
             }
           }
          donor_replacementGLF_dead11matrix_number = donor_replacementGLF_dead11matrix_number + 1u;
         }
       }
       if(_GLF_DEAD(false))
        {
         {
          vec2 GLF_dead17uv = GLF_dead17gl_FragCoord.xy / GLF_dead17resolution.x;
          vec3 GLF_dead17col = vec3(0, 0, 0);
          bool GLF_dead17c1 = GLF_dead17uv.y < 0.25;
          if(GLF_dead17c1)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
            GLF_dead17col = mix(vec3(GLF_dead17uv.x, 0, 0.75), vec3(.8, .7, GLF_dead17uv.x), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
            return;
           }
          bool GLF_dead17c2 = GLF_dead17uv.y < 0.5;
          if(! GLF_dead17c1 && GLF_dead17c2)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
            GLF_dead17col = mix(vec3(0.5, GLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
            return;
           }
          bool GLF_dead17c3 = GLF_dead17uv.y < 0.75;
          if(! GLF_dead17c1 && ! GLF_dead17c2 && GLF_dead17c3)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
            GLF_dead17col = mix(vec3(.7, sinh(GLF_dead17uv.x), GLF_dead17uv.x), vec3(.3, .5, GLF_dead17uv.x), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
            return;
           }
          bool GLF_dead17c4 = GLF_dead17uv.y >= 0.75;
          if(! GLF_dead17c1 && ! GLF_dead17c2 && ! GLF_dead17c3 && GLF_dead17c4)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
            GLF_dead17col = mix(vec3(GLF_dead17uv.x, .8, 0), vec3(1, GLF_dead17uv.y, 0), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
            return;
           }
         }
        }
      }
     if(_GLF_DEAD(false))
      {
       float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](((uvec3(158092u, 146389u, 136383u) != uvec3(593u, 38625u, 119768u)) ? -96.33 : acos(GLF_dead11one)), GLF_dead11one, -6.7, GLF_dead11one, GLF_dead11one, GLF_dead11one, -931.640, GLF_dead11one, GLF_dead11one, reflect(determinant(mat4(-3.4, -595.659, -7.7, 6.8, 3618.9274, 0.7, 965.024, -871.634, 803.766, -8.9, -5.3, -8.5, 7.8, -8.5, -98.22, -6.6)), -35.04)));
       int donor_replacementGLF_dead14i = _GLF_FUZZED(-20637);
       {
        float GLF_dead14temp = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)];
        donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)] = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6data, 10)];
        donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6data, 10)] = GLF_dead14temp;
       }
      }
    }
  }
}
int GLF_dead6search(int GLF_dead6target)
{
 GLF_dead6BST GLF_dead6currentNode;
 int GLF_dead6index = 0;
 while(GLF_dead6index != - 1)
  {
   GLF_dead6currentNode = GLF_dead6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead6index, 10)];
   if(GLF_dead6currentNode.data == GLF_dead6target)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       int donor_replacementGLF_dead12h = _GLF_FUZZED(GLF_dead6index);
       for(int GLF_dead12j = GLF_dead6target; GLF_dead12j <= donor_replacementGLF_dead12h - 1; GLF_dead12j ++)
        {
         if(GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead12j, 10)] <= GLF_dead6target)
          {
           GLF_dead6target ++;
           GLF_dead12swap(GLF_dead6target, GLF_dead12j);
          }
        }
      }
     return GLF_dead6target;
    }
   GLF_dead6index = GLF_dead6target > GLF_dead6currentNode.data ? GLF_dead6currentNode.rightIndex : GLF_dead6currentNode.leftIndex;
  }
 return - 1;
}
vec3 GLF_dead6hueColor(float GLF_dead6angle)
{
 float GLF_dead6nodeData = float(GLF_dead6search(15));
 vec3 GLF_dead6color;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
  {
   int donor_replacementGLF_dead13index = _GLF_FUZZED(bitCount(-13813));
   int donor_replacementGLF_dead13j = _GLF_FUZZED((true ? findLSB(66637) : max(-92402, -22600)));
   {
    donor_replacementGLF_dead13index = donor_replacementGLF_dead13j;
   }
  }
 GLF_dead6color = clamp(fract(GLF_dead6angle * vec3(1.0, 5.0, GLF_dead6nodeData)), 0.0, 1.0);
 if(_GLF_DEAD(false))
  {
   vec3 donor_replacementGLF_dead12color = _GLF_FUZZED(modf(vec3(-5052.5212, 4.9, 85.25), GLF_dead6color));
   int donor_replacementGLF_dead12count = _GLF_FUZZED(25673);
   {
    donor_replacementGLF_dead12color -= GLF_dead12palette(vec3(float(GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_dead12injectionSwitch.y), 10)]) * 0.1), vec3(0.8), trunc(vec3(0.1)), vec3(GLF_dead12injectionSwitch.x, 0.6, float(GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_dead12injectionSwitch.x), 10)]) * 0.1));
    donor_replacementGLF_dead12count ++;
   }
  }
 GLF_dead6color.x *= cosh(isnan(float(GLF_dead6search(30))) ? 0.0 : 1.0);
 return GLF_dead6color;
}
float GLF_dead6makeFrame(float GLF_dead6v)
{
 GLF_dead6v *= 6.5;
 if(GLF_dead6v < 1.5)
  {
   return float(GLF_dead6search(100));
  }
 if(GLF_dead6v < 4.0)
  {
   return 0.0;
  }
 if(_GLF_DEAD(false))
  {
   vec3 donor_replacementGLF_dead10color = _GLF_FUZZED(dFdx(vec3(4.0, 4.9, 7581.4208)));
   {
    donor_replacementGLF_dead10color.y += float(GLF_dead10obj.numbers[6]);
   }
  }
 if(_GLF_IDENTITY(GLF_dead6v < float(GLF_dead6search(6)), (GLF_dead6v < float(GLF_dead6search(6))) || false))
  {
   return 1.0;
  }
 return 10.0 + float(GLF_dead6search(30));
}
precision highp float;

mediump vec4 GLF_dead8gl_FragCoord;

vec4 GLF_dead8_GLF_color;

layout(set = 0, binding = 3) uniform buf3 {
 vec2 GLF_dead8resolution;
};
vec3 GLF_dead8pickColor(int GLF_dead8i)
{
 return vec3(float(GLF_dead8i) / 50.0, float(GLF_dead8i) / 120.0, float(GLF_dead8i) / 140.0);
}
vec3 GLF_dead8mand(float GLF_dead8xCoord, float GLF_dead8yCoord)
{
 int GLF_dead8xpos = int(GLF_dead8xCoord) * 256;
 int GLF_dead8ypos = int(GLF_dead8yCoord) * 256;
 int GLF_dead8height = int(GLF_dead8resolution.y) * 256;
 int GLF_dead8width = int(GLF_dead8resolution.x) * _GLF_IDENTITY(256, (_GLF_IDENTITY(256, min(256, 256))) + 0);
 int GLF_dead8c_re = ((GLF_dead8xpos - GLF_dead8width / 2) * _GLF_IDENTITY(819, max(_GLF_IDENTITY(819, clamp(819, 819, 819)), 819))) / GLF_dead8width - 102;
 if(_GLF_DEAD(false))
  {
   int donor_replacementGLF_dead13i = _GLF_FUZZED(GLF_dead8ypos);
   GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](-639.909, GLF_dead8yCoord, GLF_dead8xCoord, -7.5, GLF_dead8xCoord, GLF_dead8xCoord, GLF_dead8yCoord, -5.0, GLF_dead8yCoord, GLF_dead8xCoord), float[10](GLF_dead8xCoord, GLF_dead6_GLF_color.b, GLF_dead8yCoord, GLF_dead8yCoord, GLF_dead8yCoord, GLF_dead8xCoord, GLF_dead8xCoord, GLF_dead8xCoord, GLF_dead8yCoord, GLF_dead8yCoord)));
   {
    int GLF_dead13index = donor_replacementGLF_dead13i;
    for(int GLF_dead13j = donor_replacementGLF_dead13i + 1; GLF_dead13j < 10; GLF_dead13j ++)
     {
      if(donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13j, 10)] < donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)])
       {
        GLF_dead13index = GLF_dead13j;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          bool donor_replacementGLF_dead17c1 = _GLF_FUZZED(((GLF_dead8yCoord / mat2(-4567.5930, -6.3, -644.583, -89.10)) != mat2(-6.2, 7.9, -38.35, 2514.2487)));
          bool donor_replacementGLF_dead17c2 = _GLF_FUZZED(all(bvec4(false, true, true, true)));
          vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(vec3(7.4, 697.709, -9903.2449));
          vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(vec2(GLF_dead8yCoord, GLF_dead8xCoord));
          if(! donor_replacementGLF_dead17c1 && donor_replacementGLF_dead17c2)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(tan((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
            donor_replacementGLF_dead17col = mix(vec3(0.5, donor_replacementGLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
            1;
           }
         }
       }
     }
    float GLF_dead13smaller_number = donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)];
    donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)] = donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13i, 10)];
    donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13i, 10)] = GLF_dead13smaller_number;
   }
  }
 int GLF_dead8c_im = ((GLF_dead8ypos - GLF_dead8height / 2) * 819) / GLF_dead8width;
 int GLF_dead8x = 0, GLF_dead8y = 0;
 int GLF_dead8iteration = 0;
 if(_GLF_DEAD(false))
  {
   int donor_replacementGLF_dead16iteration = _GLF_FUZZED(GLF_dead8ypos);
   {
    return GLF_dead16pickColor(donor_replacementGLF_dead16iteration);
   }
  }
 for(int GLF_dead8k = 0; GLF_dead8k < 1000; GLF_dead8k ++)
  {
   if(GLF_dead8x * GLF_dead8x + GLF_dead8y * GLF_dead8y > 262144)
    {
     break;
    }
   int GLF_dead8x_new = (_GLF_IDENTITY((GLF_dead8x * GLF_dead8x - GLF_dead8y * GLF_dead8y), ((GLF_dead8x * GLF_dead8x - GLF_dead8y * GLF_dead8y)) | (int(_GLF_ZERO(0.0, injectionSwitch.x)) >> _GLF_IDENTITY(int(0), int(0)))) / 256 + GLF_dead8c_re);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     int donor_replacementGLF_dead10l = _GLF_FUZZED((GLF_dead8width - GLF_dead8width));
     int donor_replacementGLF_dead10stack[10] = _GLF_FUZZED(int[10](sign(GLF_dead8c_re), GLF_dead8xpos, int(70110u), int(51933u), GLF_dead8width, GLF_dead8c_re, GLF_dead8x_new, GLF_dead8width, GLF_dead8width, GLF_dead8k));
     while(GLF_dead8iteration >= 0)
      {
       GLF_dead8c_im = donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8iteration --, 10)];
       donor_replacementGLF_dead10l = donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8iteration --, 10)];
       int GLF_dead10p = GLF_dead10performPartition(donor_replacementGLF_dead10l, GLF_dead8c_im);
       if(GLF_dead10p - 1 > donor_replacementGLF_dead10l)
        {
         donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8iteration, 10)] = donor_replacementGLF_dead10l;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           {
            vec2 GLF_dead17uv = GLF_dead17gl_FragCoord.xy / GLF_dead17resolution.x;
            vec3 GLF_dead17col = vec3(0, 0, 0);
            bool GLF_dead17c1 = GLF_dead17uv.y < 0.25;
            if(GLF_dead17c1)
             {
              float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
              GLF_dead17col = mix(vec3(GLF_dead17uv.x, 0, 0.75), vec3(.8, .7, GLF_dead17uv.x), GLF_dead17stripe);
              GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
              1;
             }
            bool GLF_dead17c2 = GLF_dead17uv.y < 0.5;
            if(! GLF_dead17c1 && GLF_dead17c2)
             {
              float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
              GLF_dead17col = mix(vec3(0.5, GLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
              GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
              1;
             }
            bool GLF_dead17c3 = GLF_dead17uv.y < 0.75;
            if(! GLF_dead17c1 && ! GLF_dead17c2 && GLF_dead17c3)
             {
              float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
              GLF_dead17col = mix(vec3(.7, sinh(GLF_dead17uv.x), GLF_dead17uv.x), vec3(.3, .5, GLF_dead17uv.x), GLF_dead17stripe);
              GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
              1;
             }
            bool GLF_dead17c4 = GLF_dead17uv.y >= 0.75;
            if(! GLF_dead17c1 && ! GLF_dead17c2 && ! GLF_dead17c3 && GLF_dead17c4)
             {
              float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
              GLF_dead17col = mix(vec3(GLF_dead17uv.x, .8, 0), vec3(1, GLF_dead17uv.y, 0), GLF_dead17stripe);
              GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
              1;
             }
           }
          }
         donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8iteration, 10)] = GLF_dead10p - 1;
        }
       if(GLF_dead10p + 1 < GLF_dead8c_im)
        {
         donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8iteration, 10)] = GLF_dead10p + 1;
         donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8iteration, 10)] = GLF_dead8c_im;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16](ceil(vec3(-33.31, 2386.2322, 4.0)), vec3(-7.0, -3997.5745, -158.007), vec3(68.30, -46.95, 3.7), vec3(3146.7764, -854.848, -886.010), uintBitsToFloat(uvec3(16239u, 169948u, 38836u)), vec3(-6.9, 2.8, -8065.3453), vec3(-8213.8431, -94.72, 251.382), vec3(1.5, -9.1, -8.1), vec3(-1.0, 0.4, -562.704), vec3(75.90, 97.45, -3.6), vec3(-3.9, 5361.6249, 968.504), vec3(6.1, 372.871, 6.7), vec3(9.2, -3621.7184, -9.8), vec3(66.68, -3701.2009, 64.79), vec3(78.44, -1.1, 379.438), vec3(66.68, -3701.2009, 64.79)));
           vec3 donor_replacementGLF_dead16sum = _GLF_FUZZED((GLF_dead8yCoord + vec3(-3.4, -6.7, -1.8)));
           {
            donor_replacementGLF_dead16sum += donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8k, 16)];
           }
          }
        }
      }
    }
   GLF_dead8y = (2 * GLF_dead8x * _GLF_IDENTITY(GLF_dead8y, clamp(GLF_dead8y, GLF_dead8y, GLF_dead8y)) / 256 + GLF_dead8c_im);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](GLF_dead8yCoord, GLF_dead11one, GLF_dead8yCoord, GLF_dead8xCoord, GLF_dead8yCoord, tan(GLF_dead11one), GLF_dead8xCoord, GLF_dead8xCoord, GLF_dead11one, GLF_dead11one));
     {
      float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8width, 10)];
      donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8width, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8c_im, 10)];
      donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8c_im, 10)] = GLF_dead15temp;
     }
    }
   GLF_dead8x = _GLF_IDENTITY(GLF_dead8x_new, (_GLF_IDENTITY(GLF_dead8x_new, 0 ^ (GLF_dead8x_new))) ^ 0);
   if(_GLF_DEAD(false))
    {
     int donor_replacementGLF_dead12stack[10] = _GLF_FUZZED(int[10](GLF_dead8c_re, GLF_dead8iteration, GLF_dead8height, int(false), GLF_dead8width, GLF_dead8height, GLF_dead8k, GLF_dead8width, GLF_dead8c_re, GLF_dead8c_re));
     {
      donor_replacementGLF_dead12stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8height, 10)] = GLF_dead8width;
      donor_replacementGLF_dead12stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead8height, 10)] = GLF_dead8x - 1;
     }
    }
   GLF_dead8iteration ++;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](GLF_dead8yCoord, GLF_dead8yCoord, cos(GLF_dead8yCoord), modf(GLF_dead8yCoord, GLF_dead8yCoord), GLF_dead8xCoord, -70.93, GLF_dead13resolution.g, -69.69, atan(GLF_dead8xCoord, -6650.3976), GLF_dead8yCoord));
   if(GLF_dead15gl_FragCoord.x < GLF_dead15resolution.x / 2.0)
    {
     GLF_dead15_GLF_color = vec4(donor_replacementGLF_dead15data[0] / 10.0, donor_replacementGLF_dead15data[5] / 10.0, donor_replacementGLF_dead15data[9] / 10.0, 1.0);
    }
   else
    {
     GLF_dead15_GLF_color = vec4(donor_replacementGLF_dead15data[5] / 10.0, donor_replacementGLF_dead15data[9] / 10.0, donor_replacementGLF_dead15data[0] / 10.0, 1.0);
    }
  }
 if(GLF_dead8iteration < 1000)
  {
   return GLF_dead8pickColor(GLF_dead8iteration);
  }
 else
  {
   return vec3(0.0, 0.0, 0.5);
  }
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead16yCoord = _GLF_FUZZED(GLF_dead8yCoord);
   {
    return vec3(GLF_dead8xCoord / GLF_dead16resolution.x, 0.0, donor_replacementGLF_dead16yCoord / GLF_dead16resolution.y);
   }
  }
}
precision highp float;

mediump vec4 GLF_dead9gl_FragCoord;

layout(set = 0, binding = 4) uniform buf4 {
 vec2 GLF_dead9injectionSwitch;
};
int GLF_dead9data[10];

precision highp float;

precision highp int;

layout(set = 0, binding = 5) uniform buf5 {
 vec3 GLF_dead7polynomial;
};
precision highp float;

layout(set = 0, binding = 6) uniform buf6 {
 vec2 GLF_dead3resolution;
};
vec3 GLF_dead3pickColor(int GLF_dead3i)
{
 return vec3(float(GLF_dead3i) / 50.0, float(GLF_dead3i) / 120.0, float(GLF_dead3i) / 140.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
  {
   int donor_replacementGLF_dead10stack[10] = _GLF_FUZZED(int[10]((51939 % ivec2(-69431, -42215))[0], bitfieldReverse(-9413), GLF_dead3i, (GLF_dead3i >> ivec4(27357, -24427, 16148, 18462)[0]), GLF_dead3i, GLF_dead3i, -73226, GLF_dead3i, GLF_dead3i, GLF_dead3i));
   if(GLF_dead3i - 1 > GLF_dead3i)
    {
     donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead3i, 10)] = GLF_dead3i;
     donor_replacementGLF_dead10stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_dead3i, 10)] = GLF_dead3i - 1;
    }
  }
}
precision highp float;

layout(set = 0, binding = 7) uniform buf7 {
 vec2 GLF_dead4resolution;
};
precision highp float;

layout(set = 0, binding = 8) uniform buf8 {
 vec2 GLF_dead5resolution;
};
precision highp float;

precision highp int;

vec4 GLF_dead0_GLF_color;

vec2 GLF_dead0resolution = vec2(0.28723347, 0.5082524);

precision highp float;

struct GLF_dead2BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead2BST GLF_dead2tree[10];

precision highp float;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 9) uniform buf9 {
 vec2 resolution;
};
vec3 pickColor(int i)
{
 return vec3(float(i) / 50.0, float(i) / 120.0, float(i) / 140.0);
}
vec3 mand(float xCoord, float yCoord)
{
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](7593.0065, 5.5, yCoord, 1053.0285, xCoord, yCoord, 7.6, 35.63, xCoord, xCoord));
   int donor_replacementGLF_dead14msb10 = _GLF_FUZZED((12009 * 75155));
   uint donor_replacementGLF_dead14uselessOutVariable = _GLF_FUZZED((false ? 187992u : 131857u));
   for(int GLF_dead14i = bitfieldReverse(int(GLF_dead14injectionSwitch.x)); GLF_dead14i < findMSB(donor_replacementGLF_dead14msb10); GLF_dead14i ++)
    {
     donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead14i, 10)] = float(usubBorrow(uint(10), uint(GLF_dead14i), donor_replacementGLF_dead14uselessOutVariable)) * GLF_dead14injectionSwitch.y;
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   vec3 donor_replacementGLF_dead10color = _GLF_FUZZED((GLF_dead7polynomial - vec3(-986.075, -6.1, 712.231)));
   {
    donor_replacementGLF_dead10color.y += float(GLF_dead10obj.numbers[2]);
   }
  }
 int xpos = int(xCoord) * _GLF_IDENTITY(_GLF_IDENTITY(256, (_GLF_IDENTITY(256, (true ? _GLF_IDENTITY(256, min(256, 256)) : _GLF_FUZZED(-22944)))) | (256)), (_GLF_IDENTITY(256, (256) | (256))) ^ 0);
 if(_GLF_DEAD(false))
  {
   {
    1.0;
   }
  }
 int ypos = _GLF_IDENTITY(int(yCoord), (int(yCoord)) << _GLF_IDENTITY(int(_GLF_ZERO(0.0, injectionSwitch.x)), min(int(_GLF_ZERO(0.0, injectionSwitch.x)), int(_GLF_ZERO(0.0, injectionSwitch.x))))) * 256;
 int height = int(resolution.y) * 256;
 int width = _GLF_IDENTITY(int(resolution.x) * 256, 0 + (int(resolution.x) * 256));
 int c_re = _GLF_IDENTITY(_GLF_IDENTITY(((xpos - width / 2) * 819) / width, (((xpos - width / 2) * 819) / width) ^ 0) - 102, int(ivec4(_GLF_IDENTITY(((xpos - width / 2) * 819) / width, (((xpos - width / 2) * 819) / width) ^ 0) - 102, 0, 0, 0)));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   float donor_replacementGLF_dead0A[50] = _GLF_FUZZED(float[50](2361.8514, xCoord, -7452.7209, -1109.4913, -230.145, -4641.5630, _GLF_IDENTITY(-8413.1043, (true ? -8413.1043 : _GLF_FUZZED(5387.3379))), ldexp(roundEven(xCoord), findLSB(90664u)), xCoord, fwidth(yCoord), -319.604, yCoord, yCoord, yCoord, xCoord, xCoord, -9.8, acos(yCoord), xCoord, determinant(mat4(-26.17, 0.6, 6534.6254, 4.2, -7.3, -4.5, -81.80, 340.866, 21.69, -844.962, 6.7, 23.48, -4137.4999, 3994.5584, -5668.9145, -7376.9697)), yCoord, fwidth(_GLF_IDENTITY(yCoord, (false ? _GLF_FUZZED(yCoord) : yCoord))), acos(yCoord), xCoord, ldexp(roundEven(xCoord), findLSB(90664u)), -4641.5630, xCoord, -230.145, -319.604, xCoord, _GLF_IDENTITY(yCoord, mix(float(_GLF_IDENTITY(yCoord, min(yCoord, yCoord))), float(_GLF_FUZZED((- 7513.3891))), bool(false))), -7452.7209, -9.8, xCoord, _GLF_IDENTITY(xCoord, min(xCoord, xCoord)), yCoord, determinant(mat4(-26.17, 0.6, 6534.6254, 4.2, -7.3, -4.5, -81.80, 340.866, 21.69, -844.962, 6.7, 23.48, -4137.4999, 3994.5584, _GLF_IDENTITY(-5668.9145, mix(float(-5668.9145), float(_GLF_FUZZED((-683.967))), bool(false))), -7376.9697)), -8413.1043, -1109.4913, 2361.8514, -4641.5630, -9.8, 2361.8514, xCoord, ldexp(roundEven(xCoord), findLSB(90664u)), -8413.1043, yCoord, -319.604, acos(yCoord), -1109.4913));
   int donor_replacementGLF_dead0msb9 = _GLF_FUZZED(xpos);
   {
    GLF_dead0_GLF_color = vec4(donor_replacementGLF_dead0A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_dead0resolution.x, donor_replacementGLF_dead0A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(donor_replacementGLF_dead0msb9), 50)] / GLF_dead0resolution.y, 1.0, 1.0);
   }
   if(_GLF_DEAD(false))
    {
     vec3 donor_replacementGLF_dead17col = _GLF_FUZZED((GLF_dead7polynomial * mat3(2.5, -4.0, 89.63, -4016.9461, -2.4, 8.7, -695.302, 12.39, -9.4)));
     vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(resolution);
     {
      float GLF_dead17stripe = GLF_dead17compute_stripe(tan((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
      donor_replacementGLF_dead17col = mix(vec3(donor_replacementGLF_dead17uv.x, .8, 0), vec3(1, donor_replacementGLF_dead17uv.y, 0), GLF_dead17stripe);
      GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
      1;
     }
    }
  }
 int c_im = ((ypos - height / 2) * 819) / _GLF_IDENTITY(width, 0 | (width));
 if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, bool(bvec4(false, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), true))), (gl_FragCoord.y < 0.0))))
  {
   float donor_replacementGLF_dead3xCoord = _GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), max(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), (_GLF_FUZZED(roundEven(yCoord))) * 1.0), clamp(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), (_GLF_FUZZED(roundEven(yCoord))) * 1.0), (_GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), (_GLF_FUZZED(roundEven(yCoord))) * 1.0)) - 0.0), _GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), (_GLF_FUZZED(roundEven(yCoord))) * 1.0), _GLF_IDENTITY(_GLF_FUZZED(roundEven(yCoord)), (_GLF_FUZZED(roundEven(yCoord))) * 1.0))), _GLF_FUZZED(roundEven(yCoord))));
   if(_GLF_DEAD(false))
    {
     int donor_replacementGLF_dead16i = _GLF_FUZZED(c_im);
     {
      return vec3(float(donor_replacementGLF_dead16i) / 50.0, float(donor_replacementGLF_dead16i) / 120.0, float(donor_replacementGLF_dead16i) / 140.0);
     }
    }
   {
    float GLF_dead3height = _GLF_IDENTITY(GLF_dead3resolution, mat2(1.0) * (GLF_dead3resolution)).y;
    float GLF_dead3width = GLF_dead3resolution.x;
    float GLF_dead3xpos = _GLF_IDENTITY(donor_replacementGLF_dead3xCoord, min(donor_replacementGLF_dead3xCoord, donor_replacementGLF_dead3xCoord)) * 0.1 + (GLF_dead3resolution.x * 0.6);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](donor_replacementGLF_dead3xCoord, GLF_dead3height, GLF_dead11one, yCoord, xCoord, GLF_dead3xpos, modf(GLF_dead3xpos, yCoord), GLF_dead3width, (- fract(GLF_dead3width)), GLF_dead3height));
      {
       GLF_dead15_GLF_color = vec4(donor_replacementGLF_dead15data[0] / 10.0, donor_replacementGLF_dead15data[5] / 10.0, donor_replacementGLF_dead15data[9] / 10.0, 1.0);
      }
     }
    float GLF_dead3ypos = xCoord * 0.1 + _GLF_IDENTITY((GLF_dead3resolution.y * 0.4), min((GLF_dead3resolution.y * 0.4), (GLF_dead3resolution.y * 0.4)));
    float GLF_dead3c_re = _GLF_IDENTITY(0.8 * (GLF_dead3xpos - GLF_dead3width / 2.0), mix(float(_GLF_FUZZED(-7790.5963)), float(0.8 * (GLF_dead3xpos - GLF_dead3width / 2.0)), bool(true))) * 4.0 / GLF_dead3width - 0.4;
    float GLF_dead3c_im = 0.8 * (_GLF_IDENTITY(GLF_dead3ypos - GLF_dead3height / 2.0, mix(float(_GLF_FUZZED(23.10)), _GLF_IDENTITY(float(GLF_dead3ypos - GLF_dead3height / 2.0), (float(GLF_dead3ypos - GLF_dead3height / 2.0)) / 1.0), bool(true)))) * 4.0 / GLF_dead3width;
    float GLF_dead3x = 0.0, GLF_dead3y = 0.0;
    int GLF_dead3iteration = 0;
    for(int GLF_dead3k = 0; GLF_dead3k < 1000; GLF_dead3k ++)
     {
      if(GLF_dead3x * _GLF_IDENTITY(GLF_dead3x, clamp(_GLF_IDENTITY(GLF_dead3x, mix(float(GLF_dead3x), float(_GLF_FUZZED(6553.9900)), bool(false))), _GLF_IDENTITY(GLF_dead3x, (true ? _GLF_IDENTITY(GLF_dead3x, mix(float(_GLF_FUZZED(0.9)), float(_GLF_IDENTITY(GLF_dead3x, 1.0 * (GLF_dead3x))), bool(true))) : _GLF_FUZZED(GLF_dead3ypos))), GLF_dead3x)) + GLF_dead3y * GLF_dead3y > 4.0)
       {
        break;
       }
      float GLF_dead3x_new = _GLF_IDENTITY(GLF_dead3x * GLF_dead3x, float(mat4(GLF_dead3x * GLF_dead3x, 0.0, _GLF_IDENTITY(_GLF_IDENTITY(dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0)), (dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0))) - abs(0.0)), dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0))), _GLF_IDENTITY(determinant(mat4(1.0, 0.0, 0.0, log(1.0), 1.0, 1.0, 0.0, determinant(mat4(0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0)), _GLF_IDENTITY(1.0, float(vec4(1.0, 1.0, 0.0, sin(0.0)))), 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0)), (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? determinant(mat4(1.0, 0.0, 0.0, _GLF_IDENTITY(log(1.0), min(log(1.0), log(1.0))), 1.0, 1.0, 0.0, determinant(mat4(0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, 0.0 + (0.0)), 0.0)), 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0)), 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0)) : _GLF_FUZZED(float(-89176)))), log(1.0), 0.0, 0.0, 1.0, log(_GLF_ONE(1.0, injectionSwitch.y)), 1.0, 1.0, 1.0, 0.0, 0.0, exp(0.0), 0.0))) - GLF_dead3y * _GLF_IDENTITY(GLF_dead3y, max(GLF_dead3y, GLF_dead3y)) + GLF_dead3c_re;
      if(_GLF_DEAD(false))
       {
        int donor_replacementGLF_dead10p = _GLF_FUZZED(int(174571u));
        int donor_replacementGLF_dead10top = _GLF_FUZZED(27729);
        if(donor_replacementGLF_dead10p + 1 < ypos)
         {
          GLF_dead9data[_GLF_MAKE_IN_BOUNDS_INT(++ donor_replacementGLF_dead10top, 10)] = donor_replacementGLF_dead10p + 1;
          GLF_dead9data[_GLF_MAKE_IN_BOUNDS_INT(++ donor_replacementGLF_dead10top, 10)] = ypos;
         }
        if(_GLF_DEAD(false))
         {
          bool donor_replacementGLF_dead17c1 = _GLF_FUZZED((mat2x3(5900.8421, 3.1, -1986.4246, -71.80, -3030.2738, 4850.9239) == GLF_dead11m23));
          bool donor_replacementGLF_dead17c2 = _GLF_FUZZED((GLF_dead11m43 == mat4x3(-8910.3645, 635.274, 470.220, 0.7, -186.001, 0.0, 1.7, 8.8, -9213.9012, -437.613, -1.4, 8.2)));
          vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(GLF_dead7polynomial);
          vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(injectionSwitch);
          if(! donor_replacementGLF_dead17c1 && donor_replacementGLF_dead17c2)
           {
            float GLF_dead17stripe = GLF_dead17compute_stripe(tan((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
            donor_replacementGLF_dead17col = mix(vec3(0.5, donor_replacementGLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
            GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
            1;
           }
         }
       }
      GLF_dead3y = _GLF_IDENTITY(2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))), clamp(2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))), _GLF_IDENTITY(2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))), min(2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))), 2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))))), 2.0 * GLF_dead3x * _GLF_IDENTITY(GLF_dead3y, min(GLF_dead3y, _GLF_IDENTITY(GLF_dead3y, clamp(GLF_dead3y, GLF_dead3y, GLF_dead3y)))))) + _GLF_IDENTITY(GLF_dead3c_im, mix(float(_GLF_FUZZED(-8.8)), float(GLF_dead3c_im), bool(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)))));
      GLF_dead3x = GLF_dead3x_new;
      if(_GLF_DEAD(false))
       {
        float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](-9.4, GLF_dead3ypos, GLF_dead3ypos, GLF_dead3height, mod(-565.494, GLF_dead3width), GLF_dead11one, xCoord, yCoord, GLF_dead3ypos, GLF_dead3width));
        uint donor_replacementGLF_dead14uselessOutVariable = _GLF_FUZZED((uvec4(2361u, 199924u, 170206u, 180816u) * uvec3(68519u, 88060u, 195976u).brrr).s);
        for(int GLF_dead14i = bitfieldReverse(int(GLF_dead14injectionSwitch.x)); GLF_dead14i < findMSB(c_im); GLF_dead14i ++)
         {
          donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead14i, 10)] = float(usubBorrow(uint(10), uint(GLF_dead14i), donor_replacementGLF_dead14uselessOutVariable)) * GLF_dead14injectionSwitch.y;
         }
       }
      GLF_dead3iteration ++;
     }
    if(GLF_dead3iteration < 1000)
     {
      return GLF_dead3pickColor(GLF_dead3iteration);
      if(_GLF_DEAD(false))
       {
        int donor_replacementGLF_dead13even_index = _GLF_FUZZED(ypos);
        GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](GLF_dead3xpos, sign(GLF_dead3xpos), GLF_dead3x, (-- GLF_dead3c_im), xCoord, GLF_dead3c_im, 3.2, donor_replacementGLF_dead3xCoord, GLF_dead3c_im, GLF_dead3y), float[10](GLF_dead3c_re, donor_replacementGLF_dead3xCoord, GLF_dead3x, floor(3.9), GLF_dead3c_im, xCoord, GLF_dead3height, GLF_dead3c_im, yCoord, refract(GLF_dead3xpos, 3.6, GLF_dead3xpos))));
        {
         donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13even_index, 10)] = GLF_dead3c_im;
         GLF_dead3c_im += 2.;
         donor_replacementGLF_dead13even_index --;
         if(_GLF_DEAD(false))
          {
           int donor_replacementGLF_dead16iteration = _GLF_FUZZED(ivec2(-98925, 72403).r);
           {
            return GLF_dead16pickColor(donor_replacementGLF_dead16iteration);
           }
          }
        }
       }
      if(_GLF_DEAD(false))
       {
        float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](GLF_dead3width, GLF_dead3c_re, GLF_dead3y, -7959.8611, sinh(GLF_dead3x), donor_replacementGLF_dead3xCoord, mix(GLF_dead3y, GLF_dead3x, -131.859), GLF_dead3width, GLF_dead3x, GLF_dead3c_im));
        bool donor_replacementGLF_dead14doSwap = _GLF_FUZZED(true);
        int donor_replacementGLF_dead14j = _GLF_FUZZED((ypos));
        if(donor_replacementGLF_dead14doSwap)
         {
          float GLF_dead14temp = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(c_re, 10)];
          donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(c_re, 10)] = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14j, 10)];
          donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14j, 10)] = GLF_dead14temp;
         }
       }
     }
    else
     {
      return vec3(donor_replacementGLF_dead3xCoord / GLF_dead3resolution.x, 0.0, xCoord / GLF_dead3resolution.y);
     }
   }
   if(_GLF_DEAD(false))
    {
     int donor_replacementGLF_dead12i = _GLF_FUZZED(ypos);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(_GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), dot(vec2(0.0, 1.0), vec2(1.0, 0.0))))))))
      {
       if(width < c_re + 1)
        {
         1;
        }
      }
     {
      GLF_dead12obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead12i, 10)] = (10 - donor_replacementGLF_dead12i) * int(GLF_dead12injectionSwitch.y);
     }
    }
  }
 int x = 0, y = 0;
 int iteration = _GLF_IDENTITY(0, ~ (~ (_GLF_IDENTITY(0, (0) | (0)))));
 for(int k = _GLF_IDENTITY(0, (_GLF_IDENTITY(_GLF_IDENTITY(0, (0) / (0 | 1)), max(0, 0))) | (0 >> _GLF_IDENTITY(int(8), int(8)))); k < 1000; k ++)
  {
   if(_GLF_IDENTITY(x * _GLF_IDENTITY(_GLF_IDENTITY(x, 0 | (_GLF_IDENTITY(x, (true ? x : _GLF_FUZZED((y ^ iteration)))))), (x) | (x)) + y * y > 262144, false || (x * _GLF_IDENTITY(x, (x) | (x)) + _GLF_IDENTITY(y * y, (y * y) ^ 0) > 262144)))
    {
     break;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, _GLF_IDENTITY(vec2(mat2(injectionSwitch, 1.0, 1.0)), mix(vec2(_GLF_FUZZED(-8310.1328), (vec2(mat2(injectionSwitch, 1.0, 1.0)))[1]), vec2((vec2(mat2(injectionSwitch, 1.0, 1.0)))[0], _GLF_FUZZED(4621.9627)), bvec2(true, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))), (_GLF_IDENTITY(injectionSwitch, _GLF_IDENTITY(vec2(mat2(injectionSwitch, 1.0, 1.0)), mix(vec2(_GLF_FUZZED(-8310.1328), (vec2(mat2(injectionSwitch, 1.0, 1.0)))[1]), vec2((vec2(mat2(injectionSwitch, 1.0, _GLF_IDENTITY(1.0, _GLF_IDENTITY(float(mat3x4(_GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED((-73.20 * -7.2))), bool(false))), _GLF_ONE(1.0, injectionSwitch.y), round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0)), (false ? _GLF_FUZZED(xCoord) : float(mat3x4(_GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED((-73.20 * -7.2))), bool(false))), _GLF_ONE(1.0, injectionSwitch.y), round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0))))))))[0], _GLF_FUZZED(4621.9627)), bvec2(true, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))))) - sqrt(vec2(0.0, 0.0))).x > injectionSwitch.y))))
    {
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
       {
        int donor_replacementGLF_dead11cols = _GLF_FUZZED(iteration);
        int donor_replacementGLF_dead11sum_index = _GLF_FUZZED(c_re);
        float donor_replacementGLF_dead11sums[9] = _GLF_FUZZED(float[9](-4306.6326, -54.16, xCoord, yCoord, -715.139, frexp(yCoord, iteration), yCoord, yCoord, yCoord));
        {
         for(int GLF_dead11rows = 2; GLF_dead11rows <= 4; GLF_dead11rows ++)
          {
           donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] = 0.0;
           for(int GLF_dead11c = 0; GLF_dead11c < donor_replacementGLF_dead11cols; GLF_dead11c ++)
            {
             for(int GLF_dead11r = 0; GLF_dead11r < GLF_dead11rows; GLF_dead11r ++)
              {
               switch(donor_replacementGLF_dead11sum_index)
                {
                 case 0:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m22[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 break;
                 case 1:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m23[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 break;
                 case 2:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                 case 3:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 break;
                 case 4:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m33[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 break;
                 case 5:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                   {
                    continue;
                   }
                  }
                 case 6:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 if(_GLF_DEAD(false))
                  {
                   float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](determinant(mat2(1478.7533, -0.8, 1896.7710, 4.6)), yCoord, dFdx(xCoord), (GLF_dead7polynomial + -3152.8224).p, GLF_dead11one, GLF_dead11one, determinant(mat4(-771.905, -8236.0812, 4.6, 3.8, -7093.1146, 71.41, 25.81, 4.4, 8157.1417, 811.665, 56.71, 9.5, 4.0, -81.43, 324.620, -228.568)), yCoord, 0.0, GLF_dead11one));
                   int donor_replacementGLF_dead15j = _GLF_FUZZED(c_re);
                   {
                    float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(y, 10)];
                    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(y, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15j, 10)];
                    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15j, 10)] = GLF_dead15temp;
                   }
                  }
                 break;
                 case 7:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 break;
                 case 8:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m44[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                }
              }
            }
           donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] /= 16.0;
           donor_replacementGLF_dead11sum_index ++;
          }
        }
       }
      if(_GLF_DEAD(false))
       {
        vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16](GLF_dead7polynomial, GLF_dead7polynomial, GLF_dead4resolution.xxy, GLF_dead11m44[1].xzy, GLF_dead7polynomial, ldexp(vec3(371.300, -489.374, 6.1), ivec3(-62531, 8835, 26873)), GLF_dead7polynomial, GLF_dead7polynomial, cross(mod(GLF_dead7polynomial, 92.60), GLF_dead7polynomial), vec3(GLF_dead4resolution, xCoord), abs(vec3(1028.5612, GLF_dead13resolution)), vec3(-2629.5527, -40.26, 0.9), vec3(-2360.2201, -48.90, -8.5), GLF_dead7polynomial, (GLF_dead11m33 * GLF_dead7polynomial), GLF_dead13_GLF_color.zxx));
        vec3 donor_replacementGLF_dead16sum = _GLF_FUZZED(GLF_dead7polynomial);
        {
         donor_replacementGLF_dead16sum += donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_INT(ypos, 16)];
        }
       }
      if(_GLF_DEAD(false))
       {
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           if(_GLF_DEAD(false))
            {
             float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](5857.1757, mod(yCoord, yCoord), GLF_dead11one, xCoord, 749.695, dFdx(distance(GLF_dead9injectionSwitch, GLF_dead5resolution)), -78.02, GLF_dead11one, 1946.2384, tan(GLF_dead11one)));
             for(int GLF_dead15j = 0; GLF_dead15j < 10; GLF_dead15j ++)
              {
               if(GLF_dead15j < height + 1)
                {
                 continue;
                }
               bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(height, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)]);
               if(GLF_dead15doSwap)
                {
                 float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(height, 10)];
                 donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(height, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)];
                 donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)] = GLF_dead15temp;
                }
              }
            }
           int donor_replacementGLF_dead11rows = _GLF_FUZZED(iteration);
           if(_GLF_DEAD(false))
            {
             bool donor_replacementGLF_dead17c1 = _GLF_FUZZED((50997 < donor_replacementGLF_dead11rows));
             vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(vec3(-9239.8536, -2.0, -392.769));
             vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(GLF_dead12injectionSwitch);
             if(donor_replacementGLF_dead17c1)
              {
               float GLF_dead17stripe = GLF_dead17compute_stripe(cos((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
               donor_replacementGLF_dead17col = mix(vec3(donor_replacementGLF_dead17uv.x, 0, 0.75), vec3(.8, .7, donor_replacementGLF_dead17uv.x), GLF_dead17stripe);
               GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
               1;
              }
            }
           int donor_replacementGLF_dead11sum_index = _GLF_FUZZED((c_im / int(false)));
           float donor_replacementGLF_dead11sums[9] = _GLF_FUZZED(float[9](yCoord, xCoord, (yCoord - xCoord), xCoord, yCoord, (yCoord + xCoord), -805.918, xCoord, xCoord));
           for(int GLF_dead11c = 0; GLF_dead11c < k; GLF_dead11c ++)
            {
             for(int GLF_dead11r = 0; GLF_dead11r < donor_replacementGLF_dead11rows; GLF_dead11r ++)
              {
               switch(donor_replacementGLF_dead11sum_index)
                {
                 case 0:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m22[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 break;
                 case 1:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m23[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 if(_GLF_DEAD(false))
                  {
                   {
                    vec2 GLF_dead17uv = GLF_dead17gl_FragCoord.xy / GLF_dead17resolution.x;
                    vec3 GLF_dead17col = vec3(0, 0, 0);
                    bool GLF_dead17c1 = GLF_dead17uv.y < 0.25;
                    if(GLF_dead17c1)
                     {
                      float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
                      GLF_dead17col = mix(vec3(GLF_dead17uv.x, 0, 0.75), vec3(.8, .7, GLF_dead17uv.x), GLF_dead17stripe);
                      GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
                      1;
                     }
                    bool GLF_dead17c2 = GLF_dead17uv.y < 0.5;
                    if(! GLF_dead17c1 && GLF_dead17c2)
                     {
                      float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
                      GLF_dead17col = mix(vec3(0.5, GLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
                      GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
                      1;
                     }
                    bool GLF_dead17c3 = GLF_dead17uv.y < 0.75;
                    if(! GLF_dead17c1 && ! GLF_dead17c2 && GLF_dead17c3)
                     {
                      float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
                      GLF_dead17col = mix(vec3(.7, sinh(GLF_dead17uv.x), GLF_dead17uv.x), vec3(.3, .5, GLF_dead17uv.x), GLF_dead17stripe);
                      GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
                      1;
                     }
                    bool GLF_dead17c4 = GLF_dead17uv.y >= 0.75;
                    if(! GLF_dead17c1 && ! GLF_dead17c2 && ! GLF_dead17c3 && GLF_dead17c4)
                     {
                      float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
                      GLF_dead17col = mix(vec3(GLF_dead17uv.x, .8, 0), vec3(1, GLF_dead17uv.y, 0), GLF_dead17stripe);
                      GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
                      1;
                     }
                   }
                  }
                 break;
                 case 2:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                 case 3:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 break;
                 case 4:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m33[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 break;
                 case 5:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                 case 6:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                 break;
                 case 7:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                 break;
                 case 8:
                 donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11sum_index, 9)] += GLF_dead11m44[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                 break;
                }
              }
            }
          }
         _GLF_IDENTITY(GLF_dead7polynomial.x * pow(yCoord, 2.0) + GLF_dead7polynomial.y * yCoord, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? _GLF_IDENTITY(GLF_dead7polynomial.x * pow(yCoord, 2.0) + GLF_dead7polynomial.y * yCoord, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(yCoord) : GLF_dead7polynomial.x * pow(yCoord, 2.0) + GLF_dead7polynomial.y * yCoord)) : _GLF_FUZZED(3059.8195))) + GLF_dead7polynomial.z;
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          vec3 donor_replacementGLF_dead10color = _GLF_FUZZED((GLF_dead6resolution * mat3x2(-1569.4971, 28.39, -91.88, -5370.6258, 233.100, -4.6)));
          {
           donor_replacementGLF_dead10color.y += float(GLF_dead10obj.numbers[2]);
          }
         }
       }
      yCoord += 100.0;
     }
    }
   int x_new = ((x * x - y * y) / 256 + c_re);
   y = _GLF_IDENTITY((_GLF_IDENTITY(2, (_GLF_IDENTITY(2, (2) - 0)) | (_GLF_IDENTITY(2, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1))) / 1)) | 0)))) * x * y / 256 + c_im), (_GLF_IDENTITY((_GLF_IDENTITY(2, (_GLF_IDENTITY(2, (2) - 0)) | (_GLF_IDENTITY(2, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1))) / 1)) | 0)))) * x * y / 256 + c_im), 0 ^ ((_GLF_IDENTITY(2, (_GLF_IDENTITY(2, (2) - 0)) | (_GLF_IDENTITY(2, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1))) / 1)) | 0)))) * x * y / 256 + c_im)))) | (_GLF_IDENTITY((_GLF_IDENTITY(2, (_GLF_IDENTITY(2, (2) - 0)) | (_GLF_IDENTITY(2, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1))) / 1)) | 0)))) * x * y / 256 + c_im), ((_GLF_IDENTITY(2, (_GLF_IDENTITY(2, (2) - 0)) | (_GLF_IDENTITY(2, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1)), (int(ivec2(_GLF_IDENTITY(2, max(2, _GLF_IDENTITY(2, int(ivec4(2, 0, 1, 0))))), 1))) / 1)) | 0)))) * x * y / 256 + c_im)) << 0)));
   x = x_new;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(vec3(-7.8, -1.2, 58.07));
     vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED((GLF_dead13resolution + yCoord));
     {
      float GLF_dead17stripe = GLF_dead17compute_stripe(cos((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
      donor_replacementGLF_dead17col = mix(vec3(donor_replacementGLF_dead17uv.x, 0, 0.75), vec3(.8, .7, donor_replacementGLF_dead17uv.x), GLF_dead17stripe);
      GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
      1;
     }
    }
   iteration ++;
   if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), ! (! ((injectionSwitch.x > injectionSwitch.y)))))))
    {
     if(_GLF_DEAD(false))
      {
       vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16]((- vec3(-5255.7506, -1767.6269, -1.2)), GLF_dead7polynomial, GLF_dead7polynomial, GLF_dead7polynomial, GLF_dead7polynomial, GLF_dead7polynomial, GLF_dead7polynomial, vec3(6.7, 5.9, 4.2), inversesqrt(GLF_dead7polynomial), vec3(-3.3, 7630.1269, -0.3), GLF_dead7polynomial, vec3(2658.3647, 2.4, 98.45), inversesqrt(vec3(-8.0, 1.3, -2.5)), vec3(1.9, -8478.1396, -384.332), cross(vec3(3.4, 5.7, 76.90), vec3(6.6, 7186.5738, 7.5)), vec3(-328.459, -8943.0073, -52.86)));
       int donor_replacementGLF_dead16i = _GLF_FUZZED(findMSB(uint(true)));
       vec3 donor_replacementGLF_dead16sum = _GLF_FUZZED((+ GLF_dead7polynomial));
       {
        donor_replacementGLF_dead16sum += donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead16i, 16)];
       }
      }
     {
      int GLF_dead6treeIndex = 0;
      GLF_dead6makeTreeNode(GLF_dead6tree[0], 9);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 5);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 12);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16](vec3(-7134.0500, -413.382, -8.1), GLF_dead7polynomial, vec3(7.2, 502.477, 1.7), (xCoord * GLF_dead7polynomial), max(vec3(8841.1854, 57.66, 0.1), vec3(499.475, -2.4, 6.9)), vec3(-4.2, -983.022, 53.39), vec3(-7.0, -1.4, 285.218), GLF_dead7polynomial, vec3(-1848.0009, 760.928, -70.73), GLF_dead7polynomial, vec3(6.6, 6.2, 843.223), vec3(5.2, -621.635, 1.9), GLF_dead11m23[1], sqrt(vec3(3383.9355, -559.530, -9.4)), vec3((xCoord --)), vec3(-9375.2297, 476.589, -3.8)));
           uint donor_replacementGLF_dead16uselessOutVariable = _GLF_FUZZED(126879u);
           for(int GLF_dead16j = 0; GLF_dead16j < findLSB(16); GLF_dead16j ++)
            {
             donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_UINT(uaddCarry(uint(4 * GLF_dead16j), uint(k), donor_replacementGLF_dead16uselessOutVariable), 16u)] = GLF_dead16mand(GLF_dead16gl_FragCoord.x + float(k - bitCount(1)), GLF_dead16gl_FragCoord.y + float(GLF_dead16j - bitCount(1)));
            }
          }
         width = c_im;
        }
       }
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 15);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 7);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 8);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 2);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 6);
      GLF_dead6treeIndex ++;
      GLF_dead6insert(GLF_dead6treeIndex, 17);
      GLF_dead6treeIndex ++;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        {
         vec2 GLF_dead17uv = GLF_dead17gl_FragCoord.xy / GLF_dead17resolution.x;
         vec3 GLF_dead17col = vec3(0, 0, 0);
         bool GLF_dead17c1 = GLF_dead17uv.y < 0.25;
         if(GLF_dead17c1)
          {
           float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
           GLF_dead17col = mix(vec3(GLF_dead17uv.x, 0, 0.75), vec3(.8, .7, GLF_dead17uv.x), GLF_dead17stripe);
           GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
           1;
          }
         bool GLF_dead17c2 = GLF_dead17uv.y < 0.5;
         if(! GLF_dead17c1 && GLF_dead17c2)
          {
           float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
           GLF_dead17col = mix(vec3(0.5, GLF_dead17uv.x, 0.1), vec3(.4, 0, .5), GLF_dead17stripe);
           GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
           1;
          }
         bool GLF_dead17c3 = GLF_dead17uv.y < 0.75;
         if(! GLF_dead17c1 && ! GLF_dead17c2 && GLF_dead17c3)
          {
           float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
           GLF_dead17col = mix(vec3(.7, sinh(GLF_dead17uv.x), GLF_dead17uv.x), vec3(.3, .5, GLF_dead17uv.x), GLF_dead17stripe);
           GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
           1;
          }
         bool GLF_dead17c4 = GLF_dead17uv.y >= 0.75;
         if(! GLF_dead17c1 && ! GLF_dead17c2 && ! GLF_dead17c3 && GLF_dead17c4)
          {
           float GLF_dead17stripe = GLF_dead17compute_stripe(tan((GLF_dead17uv.x + GLF_dead17uv.y) * 20.0));
           GLF_dead17col = mix(vec3(GLF_dead17uv.x, .8, 0), vec3(1, GLF_dead17uv.y, 0), GLF_dead17stripe);
           GLF_dead17_GLF_color = vec4(GLF_dead17col, 1.0);
           1;
          }
        }
       }
      GLF_dead6insert(GLF_dead6treeIndex, 13);
      vec2 GLF_dead6z = (GLF_dead6gl_FragCoord.yx / GLF_dead6resolution);
      float GLF_dead6x = GLF_dead6makeFrame(GLF_dead6z.x);
      float GLF_dead6y = GLF_dead6makeFrame(GLF_dead6z.y);
      int GLF_dead6sum = - 100;
      for(int GLF_dead6target = 0; GLF_dead6target < 20; GLF_dead6target ++)
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](yCoord, 369.486, GLF_dead11one, 3745.1837, yCoord, 14.33, GLF_dead11one, xCoord, 7106.8757, xCoord));
          for(int GLF_dead15i = 0; GLF_dead15i < 10; GLF_dead15i ++)
           {
            donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)] = float(10 - GLF_dead15i) * GLF_dead15injectionSwitch.y;
           }
         }
        int GLF_dead6result = GLF_dead6search(GLF_dead6target);
        if(GLF_dead6result > 0)
         {
          GLF_dead6sum += GLF_dead6result;
          if(_GLF_DEAD(false))
           {
            int donor_replacementGLF_dead13j = _GLF_FUZZED(ypos);
            {
             GLF_dead6sum = donor_replacementGLF_dead13j;
            }
           }
         }
        else
         {
          switch(GLF_dead6result)
           {
            case - 1:
            GLF_dead6sum += 1;
            if(_GLF_DEAD(false))
             {
              float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10]((-- xCoord), yCoord, length(vec3(7637.1306, 3844.2628, -690.837)), sign(GLF_dead6x), GLF_dead6x, yCoord, 6.5, yCoord, -175.026, -8434.2380));
              for(int GLF_dead15i = 0; GLF_dead15i < 9; GLF_dead15i ++)
               {
                for(int GLF_dead15j = 0; GLF_dead15j < 10; GLF_dead15j ++)
                 {
                  if(GLF_dead15j < GLF_dead15i + 1)
                   {
                    continue;
                   }
                  bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)]);
                  if(GLF_dead15doSwap)
                   {
                    float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)];
                    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)];
                    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)] = GLF_dead15temp;
                   }
                 }
               }
             }
            break;
            if(_GLF_DEAD(false))
             {
              bool donor_replacementGLF_dead17c1 = _GLF_FUZZED((bvec2(false, false) != bvec2(false, true)));
              vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(GLF_dead7polynomial);
              if(donor_replacementGLF_dead17c1)
               {
                float GLF_dead17stripe = GLF_dead17compute_stripe(cos((GLF_dead6z.x + GLF_dead6z.y) * 20.0));
                donor_replacementGLF_dead17col = mix(vec3(GLF_dead6z.x, 0, 0.75), vec3(.8, .7, GLF_dead6z.x), GLF_dead17stripe);
                GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
                1;
               }
             }
            case 0:
            1;
           }
         }
       }
      float GLF_dead6a = tan(_GLF_IDENTITY(GLF_dead6x + GLF_dead6y * float(GLF_dead6sum), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(xCoord) : GLF_dead6x + GLF_dead6y * float(GLF_dead6sum))));
      GLF_dead6_GLF_color = vec4(GLF_dead6hueColor(GLF_dead6a), 1.);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        {
         int GLF_dead16msb16 = 65536;
         uint GLF_dead16uselessOutVariable;
         vec3 GLF_dead16data[16];
         for(int GLF_dead16i = 0; GLF_dead16i < findMSB(16); GLF_dead16i ++)
          {
           for(int GLF_dead16j = 0; GLF_dead16j < findLSB(16); GLF_dead16j ++)
            {
             GLF_dead16data[_GLF_MAKE_IN_BOUNDS_UINT(uaddCarry(uint(4 * GLF_dead16j), uint(GLF_dead16i), GLF_dead16uselessOutVariable), 16u)] = GLF_dead16mand(GLF_dead16gl_FragCoord.x + float(GLF_dead16i - bitCount(1)), GLF_dead16gl_FragCoord.y + float(GLF_dead16j - bitCount(1)));
            }
          }
         vec3 GLF_dead16sum = vec3(0.0);
         for(int GLF_dead16i = bitfieldReverse(0); GLF_dead16i < findMSB(GLF_dead16msb16); GLF_dead16i ++)
          {
           GLF_dead16sum += GLF_dead16data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead16i, 16)];
          }
         GLF_dead16sum /= vec3(16.0);
         GLF_dead16_GLF_color = vec4(GLF_dead16sum, 1.0);
        }
       }
     }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     vec3 donor_replacementGLF_dead17col = _GLF_FUZZED(floor(GLF_dead7polynomial));
     vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(GLF_dead3resolution);
     {
      float GLF_dead17stripe = GLF_dead17compute_stripe(cos((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
      donor_replacementGLF_dead17col = mix(vec3(.7, sinh(donor_replacementGLF_dead17uv.x), donor_replacementGLF_dead17uv.x), vec3(.3, .5, donor_replacementGLF_dead17uv.x), GLF_dead17stripe);
      GLF_dead17_GLF_color = vec4(donor_replacementGLF_dead17col, 1.0);
      1;
     }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     int donor_replacementGLF_dead13even_index = _GLF_FUZZED(c_im);
     float donor_replacementGLF_dead13even_number = _GLF_FUZZED(asin(6502.5410));
     GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](yCoord, xCoord, yCoord, yCoord, xCoord, 7.6, yCoord, 6.3, xCoord, -3.2), float[10](xCoord, 70.15, yCoord, xCoord, yCoord, xCoord, -3148.2055, xCoord, 9.1, -8.6)));
     if(_GLF_DEAD(false))
      {
       float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](xCoord, 6.5, donor_replacementGLF_dead13even_number, donor_replacementGLF_dead13even_number, donor_replacementGLF_dead13even_number, donor_replacementGLF_dead13even_number, GLF_dead11one, GLF_dead11one, xCoord, GLF_dead11one));
       uint donor_replacementGLF_dead14uselessOutVariable = _GLF_FUZZED(86327u);
       {
        donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(width, 10)] = float(usubBorrow(uint(10), uint(width), donor_replacementGLF_dead14uselessOutVariable)) * GLF_dead14injectionSwitch.y;
       }
      }
     {
      donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13even_index, 10)] = donor_replacementGLF_dead13even_number;
      donor_replacementGLF_dead13even_number += 2.;
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        vec3 donor_replacementGLF_dead16data[16] = _GLF_FUZZED(vec3[16](vec3(2.1, -5.0, 7.4), vec3(-9.0, 61.72, 854.227), GLF_dead7polynomial, vec3(-0.8, 3.3, -48.51).spp, GLF_dead7polynomial, GLF_dead7polynomial, vec3(-60.40, 6.8, -871.256), vec3(-450.280, -219.898, -2.0), vec3(570.546, -225.274, -896.637), GLF_dead7polynomial, radians(GLF_dead7polynomial), vec3(6.2, -1.2, 7999.9273), vec3(-5.0, -2238.1245, 7.6), vec3(-3744.4336, -969.449, -0.8), GLF_dead7polynomial, dFdx(vec3(-53.25, -6424.4138, -979.275))));
        int donor_replacementGLF_dead16i = _GLF_FUZZED((x_new ^ 28527));
        uint donor_replacementGLF_dead16uselessOutVariable = _GLF_FUZZED(53523u);
        for(int GLF_dead16j = 0; GLF_dead16j < findLSB(16); GLF_dead16j ++)
         {
          donor_replacementGLF_dead16data[_GLF_MAKE_IN_BOUNDS_UINT(uaddCarry(uint(4 * GLF_dead16j), uint(donor_replacementGLF_dead16i), donor_replacementGLF_dead16uselessOutVariable), 16u)] = GLF_dead16mand(GLF_dead16gl_FragCoord.x + float(donor_replacementGLF_dead16i - bitCount(1)), GLF_dead16gl_FragCoord.y + float(GLF_dead16j - bitCount(1)));
         }
       }
      donor_replacementGLF_dead13even_index --;
      if(_GLF_DEAD(false))
       {
        float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](donor_replacementGLF_dead13even_number, (true ? xCoord : ldexp(7979.9058, k)), mix(GLF_dead11one, yCoord, GLF_dead11one), donor_replacementGLF_dead13even_number, xCoord, xCoord, -207.809, GLF_dead11one, xCoord, xCoord));
        int donor_replacementGLF_dead15i = _GLF_FUZZED(donor_replacementGLF_dead13even_index);
        {
         float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15i, 10)];
         donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(iteration, 10)];
         donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(iteration, 10)] = GLF_dead15temp;
        }
       }
     }
    }
  }
 if(_GLF_DEAD(false))
  {
   int donor_replacementGLF_dead2target = _GLF_FUZZED((iteration));
   {
    GLF_dead2BST GLF_dead2currentNode;
    int GLF_dead2index = 0;
    if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (_GLF_IDENTITY(false, (false) && true)), ! (! (! (_GLF_IDENTITY(false, (false) && true)))))))))
     {
      int donor_replacementGLF_dead13even_index = _GLF_FUZZED(x);
      float donor_replacementGLF_dead13even_number = _GLF_FUZZED(cos(yCoord));
      GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](7.8, xCoord, yCoord, -5.2, yCoord, 7.8, yCoord, xCoord, xCoord, atan(-6.9)), float[10](xCoord, yCoord, xCoord, yCoord, xCoord, xCoord, yCoord, yCoord, -9.4, yCoord)));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](yCoord, yCoord, float(171967u), exp2(-6778.0160), dot(GLF_dead6resolution, GLF_dead0resolution), determinant((mat4(4.0, 6698.8789, -171.925, 2.4, -12.46, 1043.5981, 29.06, 6373.0949, 8.2, -7188.9421, 2.9, -2.6, -0.0, 6454.7213, 3719.6097, 4976.3668) / xCoord)), xCoord, GLF_dead11one, yCoord, determinant((mat4(4.0, 6698.8789, -171.925, 2.4, -12.46, 1043.5981, 29.06, 6373.0949, 8.2, -7188.9421, 2.9, -2.6, -0.0, 6454.7213, 3719.6097, 4976.3668) / xCoord))));
        {
         GLF_dead14_GLF_color = vec4(donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(height), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(1), 10)] / 10.0, 1.0);
        }
       }
      {
       donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13even_index, 10)] = donor_replacementGLF_dead13even_number;
       donor_replacementGLF_dead13even_number += 2.;
       donor_replacementGLF_dead13even_index --;
      }
     }
    while(GLF_dead2index != - 1)
     {
      GLF_dead2currentNode = GLF_dead2tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead2index, 10)];
      if(GLF_dead2currentNode.data == donor_replacementGLF_dead2target)
       {
        donor_replacementGLF_dead2target;
       }
      GLF_dead2index = donor_replacementGLF_dead2target > GLF_dead2currentNode.data ? GLF_dead2currentNode.rightIndex : GLF_dead2currentNode.leftIndex;
     }
    - 1;
    if(_GLF_DEAD(false))
     {
      int donor_replacementGLF_dead13even_index = _GLF_FUZZED(c_re);
      float donor_replacementGLF_dead13even_number = _GLF_FUZZED(float(86712u));
      GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](7.5, xCoord, sin(xCoord), yCoord, vec3(43.75, 447.887, 895.499).g, xCoord, mix(xCoord, yCoord, 4.3), yCoord, yCoord, cosh(yCoord)), float[10](-11.81, -3687.4816, -2.8, xCoord, -598.957, dot(vec4(6.7, -90.12, -3481.1121, 256.129), GLF_dead8_GLF_color), sin(-16.32), yCoord, xCoord, xCoord)));
      while(donor_replacementGLF_dead13even_index >= 0)
       {
        if(_GLF_DEAD(false))
         {
          float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](-5.4, GLF_dead11one, xCoord, exp2((donor_replacementGLF_dead13even_number)), donor_replacementGLF_dead13even_number, -1706.2739, donor_replacementGLF_dead13even_number, refract(-758.817, yCoord, yCoord), pow(donor_replacementGLF_dead13even_number, yCoord), GLF_dead11one));
          for(int GLF_dead15i = 0; GLF_dead15i < 9; GLF_dead15i ++)
           {
            for(int GLF_dead15j = 0; GLF_dead15j < 10; GLF_dead15j ++)
             {
              if(GLF_dead15j < GLF_dead15i + 1)
               {
                continue;
               }
              bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)]);
              if(GLF_dead15doSwap)
               {
                float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)];
                donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)];
                donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)] = GLF_dead15temp;
               }
             }
           }
         }
        donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13even_index, 10)] = donor_replacementGLF_dead13even_number;
        donor_replacementGLF_dead13even_number += 2.;
        donor_replacementGLF_dead13even_index --;
       }
     }
   }
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](yCoord, log(xCoord), xCoord, (yCoord - xCoord), 57.83, 39.90, (xCoord --), modf(yCoord, yCoord), yCoord, log(xCoord)));
     int donor_replacementGLF_dead14msb9 = _GLF_FUZZED((width << iteration));
     if(GLF_dead14gl_FragCoord.x < GLF_dead14resolution.x / 2.0)
      {
       GLF_dead14_GLF_color = vec4(donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(1), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(donor_replacementGLF_dead14msb9), 10)] / 10.0, 1.0);
      }
     else
      {
       GLF_dead14_GLF_color = vec4(donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(donor_replacementGLF_dead14msb9), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(1), 10)] / 10.0, 1.0);
      }
    }
  }
 if(_GLF_IDENTITY(iteration, _GLF_IDENTITY(int(int(_GLF_IDENTITY(iteration, (iteration) - 0))), 0 ^ (int(int(iteration))))) < 1000)
  {
   return pickColor(iteration);
  }
 else
  {
   return vec3(0.0, 0.0, 0.5);
  }
}
void main()
{
 vec3 data[16];
 for(int i = 0; i < 4; _GLF_IDENTITY(i ++, (i ++) * 1))
  {
   for(int j = 0; _GLF_IDENTITY(_GLF_IDENTITY(j < 4, (j < 4) || false), (_GLF_IDENTITY(j < 4, (_GLF_IDENTITY(j, max(j, _GLF_IDENTITY(j, _GLF_IDENTITY((j), min((j), (j))) >> 0))) < 4) || false)) && _GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(injectionSwitch, (true ? injectionSwitch : _GLF_FUZZED(GLF_dead3resolution))).y))); j ++)
    {
     data[4 * j + i] = mand(gl_FragCoord.x + float(_GLF_IDENTITY(i - 1, int(ivec2(i - 1, 1)))), gl_FragCoord.y + _GLF_IDENTITY(float(_GLF_IDENTITY(j - 1, (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))) | (j - 1))), max(_GLF_IDENTITY(float(_GLF_IDENTITY(j - 1, (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))) | (j - 1))), float(mat3(float(_GLF_IDENTITY(j - 1, (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))) | (j - 1))), round(length(normalize(vec4(1.0, 1.0, 1.0, 1.0)))), 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, length(0.0)))), _GLF_IDENTITY(float(_GLF_IDENTITY(j - 1, (_GLF_IDENTITY(j - 1, _GLF_IDENTITY(max(j - 1, j - 1), (max(_GLF_IDENTITY(j - 1, (false ? _GLF_FUZZED(81552) : j - 1)), j - 1)) << 0))) | (j - 1))), max(float(_GLF_IDENTITY(j - 1, (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))) | (j - _GLF_IDENTITY(1, 0 + (1))))), float(_GLF_IDENTITY(j - 1, _GLF_IDENTITY(_GLF_IDENTITY((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))), max(_GLF_IDENTITY((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))), 0 | ((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))))), (_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))))), (_GLF_IDENTITY((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), (~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))))) >> int(_GLF_ZERO(0.0, injectionSwitch.x))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))), max(_GLF_IDENTITY((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))), 0 | ((_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1)))))))))))))), (_GLF_IDENTITY(_GLF_IDENTITY(j - 1, max(j - 1, j - 1)), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? _GLF_IDENTITY(~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))), (true ? ~ (_GLF_IDENTITY(j - 1, max(j - 1, j - 1))) : _GLF_FUZZED(i))) : _GLF_FUZZED((j))))), int(int(~ (~ (_GLF_IDENTITY(j - 1, max(j - _GLF_IDENTITY(1, (1) ^ 0), _GLF_IDENTITY(j - 1, int(int(j - 1)))))))))))))))))) / 1) | (j - 1))))))));
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(i >= int(GLF_dead4resolution.x))
        {
         if(_GLF_DEAD(false))
          {
           float donor_replacementGLF_dead16xCoord = _GLF_FUZZED(GLF_dead11one);
           float donor_replacementGLF_dead16yCoord = _GLF_FUZZED(GLF_dead11m23[0][2]);
           {
            float GLF_dead16height = GLF_dead16resolution.y;
            float GLF_dead16width = GLF_dead16resolution.x;
            float GLF_dead16xpos = donor_replacementGLF_dead16xCoord * 0.1 + (GLF_dead16resolution.x * 0.6);
            float GLF_dead16ypos = donor_replacementGLF_dead16yCoord * 0.1 + (GLF_dead16resolution.y * 0.4);
            float GLF_dead16c_re = 0.8 * (GLF_dead16xpos - GLF_dead16width / 2.0) * 4.0 / GLF_dead16width - 0.4;
            float GLF_dead16c_im = 0.8 * (GLF_dead16ypos - GLF_dead16height / 2.0) * 4.0 / GLF_dead16width;
            float GLF_dead16x = 0.0, GLF_dead16y = 0.0;
            if(0.0 > GLF_dead16resolution.x)
             {
              GLF_dead16x = 1.0;
              GLF_dead16y = 1.0;
             }
            int GLF_dead16iteration = bitfieldReverse(int(GLF_dead16x));
            int GLF_dead16k = bitfieldExtract(int(GLF_dead16y), bitCount(int(GLF_dead16x)), int(GLF_dead16y));
            int GLF_dead16iterationCap = 1000;
            do
             {
              if(GLF_dead16x * GLF_dead16x + GLF_dead16y * GLF_dead16y > 4.0)
               {
                break;
               }
              float GLF_dead16x_new = GLF_dead16x * GLF_dead16x - GLF_dead16y * GLF_dead16y + GLF_dead16c_re;
              GLF_dead16y = 2.0 * GLF_dead16x * GLF_dead16y + GLF_dead16c_im;
              GLF_dead16x = GLF_dead16x_new;
              GLF_dead16iteration ++;
              GLF_dead16k ++;
             }
            while(GLF_dead16k < bitfieldInsert(GLF_dead16iterationCap + (257.0 > GLF_dead16resolution.y ? 1 : 0), 0, 0, 0));
            if(0.0 > GLF_dead16resolution.y)
             {
              GLF_dead16iterationCap += 1;
             }
            if(GLF_dead16iteration < bitfieldInsert(GLF_dead16iterationCap, 0, 0, 0))
             {
              GLF_dead16pickColor(GLF_dead16iteration);
             }
            else
             {
              vec3(donor_replacementGLF_dead16xCoord / GLF_dead16resolution.x, 0.0, donor_replacementGLF_dead16yCoord / GLF_dead16resolution.y);
             }
           }
          }
         break;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         for(int GLF_dead8j = 0; GLF_dead8j < 4; GLF_dead8j ++)
          {
           data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_dead8j + i, 16)] = GLF_dead8mand(_GLF_IDENTITY(GLF_dead8gl_FragCoord.x + float(i - 1), (true ? GLF_dead8gl_FragCoord.x + float(i - 1) : _GLF_FUZZED(0.2))), GLF_dead8gl_FragCoord.y + float(GLF_dead8j - 1));
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           int donor_replacementGLF_dead11rows = _GLF_FUZZED(-59614);
           float donor_replacementGLF_dead11sums[9] = _GLF_FUZZED(float[9](4.0, 2.6, -26.26, -4686.5237, -4.6, 0.1, (791.265 - -120.492), -66.44, GLF_dead6_GLF_color.s));
           {
            for(int GLF_dead11r = 0; GLF_dead11r < donor_replacementGLF_dead11rows; GLF_dead11r ++)
             {
              switch(i)
               {
                case 0:
                if(_GLF_DEAD(false))
                 {
                  float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](-394.507, GLF_dead11one, 57.26, 4668.7339, 9.5, log(GLF_dead11one), -20.89, -27.37, GLF_dead11one, GLF_dead11one));
                  int donor_replacementGLF_dead14i = _GLF_FUZZED(ivec2(22952, 21790).y);
                  int donor_replacementGLF_dead14msb10 = _GLF_FUZZED(donor_replacementGLF_dead11rows);
                  uint donor_replacementGLF_dead14uselessOutVariable = _GLF_FUZZED(16315u);
                  for(int GLF_dead14j = bitfieldExtract(int(GLF_dead14injectionSwitch.x), 0, 0); GLF_dead14j < findLSB(donor_replacementGLF_dead14msb10); GLF_dead14j ++)
                   {
                    if(uint(GLF_dead14j) < uaddCarry(uint(donor_replacementGLF_dead14i), 1u, donor_replacementGLF_dead14uselessOutVariable))
                     {
                      continue;
                     }
                    bool GLF_dead14doSwap = GLF_dead14checkSwap(donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)], donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead14j, 10)]);
                    if(GLF_dead14doSwap)
                     {
                      float GLF_dead14temp = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)];
                      donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead14i, 10)] = donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead14j, 10)];
                      donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead14j, 10)] = GLF_dead14temp;
                     }
                   }
                 }
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m22[_GLF_MAKE_IN_BOUNDS_INT(i, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                break;
                case 1:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m23[_GLF_MAKE_IN_BOUNDS_INT(i, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                break;
                case 2:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m24[_GLF_MAKE_IN_BOUNDS_INT(i, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                break;
                case 3:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m32[_GLF_MAKE_IN_BOUNDS_INT(i, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                break;
                case 4:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m33[_GLF_MAKE_IN_BOUNDS_INT(i, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                break;
                case 5:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m34[_GLF_MAKE_IN_BOUNDS_INT(i, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                break;
                case 6:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m42[_GLF_MAKE_IN_BOUNDS_INT(i, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)];
                break;
                case 7:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m43[_GLF_MAKE_IN_BOUNDS_INT(i, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)];
                break;
                case 8:
                donor_replacementGLF_dead11sums[_GLF_MAKE_IN_BOUNDS_INT(i, 9)] += GLF_dead11m44[_GLF_MAKE_IN_BOUNDS_INT(i, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)];
                break;
               }
             }
           }
          }
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       int donor_replacementGLF_dead13even_index = _GLF_FUZZED(j);
       float donor_replacementGLF_dead13even_number = _GLF_FUZZED(_GLF_color.y);
       GLF_dead13Obj donor_replacementGLF_dead13obj = _GLF_FUZZED(GLF_dead13Obj(float[10](-37.26, normalize(21.08), -4347.6688, normalize(1454.1975), 2.4, -7.0, -4.2, -759.654, length(GLF_dead7polynomial), 1.4), float[10](3.7, -1.9, 0.6, -50.45, 73.33, -2.0, 2.3, -575.910, 35.56, 96.40)));
       {
        donor_replacementGLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead13even_index, 10)] = donor_replacementGLF_dead13even_number;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          int donor_replacementGLF_dead16iterationCap = _GLF_FUZZED(j);
          if(0.0 > GLF_dead16resolution.y)
           {
            donor_replacementGLF_dead16iterationCap += 1;
           }
         }
        donor_replacementGLF_dead13even_number += 2.;
        donor_replacementGLF_dead13even_index --;
       }
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec2(0.0, 0.0))))))
    {
     int donor_replacementGLF_dead14i = _GLF_FUZZED(i);
     int donor_replacementGLF_dead14j = _GLF_FUZZED((-13467 * i));
     uint donor_replacementGLF_dead14uselessOutVariable = _GLF_FUZZED(141840u);
     if(uint(donor_replacementGLF_dead14j) < uaddCarry(uint(donor_replacementGLF_dead14i), 1u, donor_replacementGLF_dead14uselessOutVariable))
      {
       continue;
      }
    }
  }
 vec3 sum = vec3(0.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   vec2 donor_replacementGLF_dead9color = _GLF_FUZZED(GLF_dead3resolution);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     int donor_replacementGLF_dead11c = _GLF_FUZZED(-80740);
     uint donor_replacementGLF_dead11matrix_number = _GLF_FUZZED(122680u);
     int donor_replacementGLF_dead11rows = _GLF_FUZZED(abs(-57756));
     {
      for(int GLF_dead11r = 0; GLF_dead11r < donor_replacementGLF_dead11rows; GLF_dead11r ++)
       {
        switch(donor_replacementGLF_dead11matrix_number)
         {
          case 0u:
          GLF_dead11m22[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
          break;
          case 1u:
          GLF_dead11m23[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
          break;
          case 2u:
          GLF_dead11m24[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
          break;
          case 3u:
          GLF_dead11m32[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
          break;
          case 4u:
          GLF_dead11m33[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
          break;
          case 5u:
          GLF_dead11m34[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
          break;
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
            float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](GLF_dead11one, -76.10, 8342.6122, radians(normalize(-61.08)), GLF_dead11one, GLF_dead11one, GLF_dead11one, -7343.8166, 9.5, -1.9));
            for(int GLF_dead15i = 0; GLF_dead15i < 9; GLF_dead15i ++)
             {
              for(int GLF_dead15j = 0; GLF_dead15j < 10; GLF_dead15j ++)
               {
                if(GLF_dead15j < GLF_dead15i + 1)
                 {
                  continue;
                 }
                bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)]);
                if(GLF_dead15doSwap)
                 {
                  float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)];
                  donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)];
                  donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)] = GLF_dead15temp;
                 }
               }
             }
           }
          case 6u:
          GLF_dead11m42[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 2)] = GLF_dead11one;
          break;
          case 7u:
          GLF_dead11m43[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 3)] = GLF_dead11one;
          break;
          case 8u:
          GLF_dead11m44[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead11c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead11r, 4)] = GLF_dead11one;
          break;
         }
       }
     }
    }
   int donor_replacementGLF_dead9i = _GLF_FUZZED(ivec3(-90900, 67765, -71530)[2]);
   if(int(GLF_dead9gl_FragCoord[1]) < 240)
    {
     donor_replacementGLF_dead9color = fract(asinh(sum.yx - trunc(float(GLF_dead9data[6]))));
     donor_replacementGLF_dead9color.y -= isnan(float(_GLF_IDENTITY(donor_replacementGLF_dead9i, 0 ^ (donor_replacementGLF_dead9i)))) ? tanh(GLF_dead9gl_FragCoord.x) : atanh(GLF_dead9gl_FragCoord.y);
     1;
    }
   else
    {
     if(_GLF_DEAD(false))
      {
       {
        GLF_dead13Obj GLF_dead13obj;
        int GLF_dead13odd_index = 0;
        float GLF_dead13odd_number = 1.0;
        while(GLF_dead13odd_index <= 9)
         {
          GLF_dead13obj.odd_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13odd_index, 10)] = GLF_dead13odd_number;
          GLF_dead13odd_number += 2.0;
          GLF_dead13odd_index ++;
         }
        int GLF_dead13even_index = 9;
        float GLF_dead13even_number = 0.0;
        while(GLF_dead13even_index >= 0)
         {
          GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13even_index, 10)] = GLF_dead13even_number;
          GLF_dead13even_number += 2.;
          GLF_dead13even_index --;
         }
        for(int GLF_dead13i = 0; GLF_dead13i < 9; GLF_dead13i ++)
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            int donor_replacementGLF_dead16iterationCap = _GLF_FUZZED(((-- donor_replacementGLF_dead9i) / GLF_dead13i));
            {
             donor_replacementGLF_dead16iterationCap += 1;
            }
           }
          int GLF_dead13index = GLF_dead13i;
          for(int GLF_dead13j = GLF_dead13i + 1; GLF_dead13j < 10; GLF_dead13j ++)
           {
            if(GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13j, 10)] < GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)])
             {
              GLF_dead13index = GLF_dead13j;
             }
           }
          float GLF_dead13smaller_number = GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)];
          GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13index, 10)] = GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13i, 10)];
          GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead13i, 10)] = GLF_dead13smaller_number;
         }
        if(_GLF_DEAD(false))
         {
          {
           1;
          }
         }
        vec2 GLF_dead13uv = GLF_dead13gl_FragCoord.xy / GLF_dead13resolution.xy;
        vec3 GLF_dead13col = tan(pow(GLF_dead13uv.xxx, GLF_dead13uv.yyy) + vec3(GLF_dead13obj.odd_numbers[_GLF_MAKE_IN_BOUNDS_INT(int(floor(GLF_dead13gl_FragCoord.x / 1000.0)), 10)], GLF_dead13obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(int(floor(GLF_dead13gl_FragCoord.y / 1000.0)), 10)], sinh(GLF_dead13uv.x)));
        GLF_dead13_GLF_color.rgb = GLF_dead13col;
        GLF_dead13_GLF_color.a = 1.0;
       }
      }
     if(int(GLF_dead9gl_FragCoord[1]) < 270)
      {
       donor_replacementGLF_dead9color = fract(sin(sum.yx - trunc(float(GLF_dead9data[7]))));
       donor_replacementGLF_dead9color.y *= mix(normalize(sum), normalize(vec3(donor_replacementGLF_dead9color, degrees(donor_replacementGLF_dead9color.x))), GLF_dead9injectionSwitch.x).y;
       1;
      }
     else
      {
       discard;
      }
    }
  }
 for(int i = 0; i < _GLF_IDENTITY(16, clamp(16, 16, 16)); i ++)
  {
   sum += data[i];
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     float donor_replacementGLF_dead17v = _GLF_FUZZED(GLF_dead11one);
     {
      dFdx(donor_replacementGLF_dead17v) * GLF_dead17injectionSwitch.y;
     }
    }
  }
 if(_GLF_DEAD(false))
  {
   {
    vec3 GLF_dead8data[16];
    for(int GLF_dead8i = 0; GLF_dead8i < 4; GLF_dead8i ++)
     {
      for(int GLF_dead8j = 0; GLF_dead8j < 4; GLF_dead8j ++)
       {
        if(_GLF_DEAD(false))
         {
          float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](621.824, 0.0, -3.8, GLF_dead11one, -9.3, -9490.3916, GLF_dead11one, GLF_dead11one, -6.5, GLF_dead11one));
          for(int GLF_dead15j = 0; GLF_dead15j < 10; GLF_dead15j ++)
           {
            if(GLF_dead15j < GLF_dead8i + 1)
             {
              continue;
             }
            bool GLF_dead15doSwap = GLF_dead15checkSwap(donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8i, 10)], donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)]);
            if(GLF_dead15doSwap)
             {
              float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8i, 10)];
              donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)];
              donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead15j, 10)] = GLF_dead15temp;
             }
           }
         }
        GLF_dead8data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_dead8j + GLF_dead8i, 16)] = GLF_dead8mand(_GLF_IDENTITY(GLF_dead8gl_FragCoord, _GLF_IDENTITY(vec4(mat2(GLF_dead8gl_FragCoord)), (vec4(mat2(GLF_dead8gl_FragCoord))) - vec4(0.0, 0.0, 0.0, 0.0))).x + float(GLF_dead8i - 1), GLF_dead8gl_FragCoord.y + float(GLF_dead8j - _GLF_IDENTITY(1, (1) / 1)));
       }
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      bool donor_replacementGLF_dead17c1 = _GLF_FUZZED((GLF_dead11m32 == mat3x2(-162.182, 12.19, 8867.8406, 966.505, 5.1, 28.59)));
      bool donor_replacementGLF_dead17c2 = _GLF_FUZZED(false);
      bool donor_replacementGLF_dead17c3 = _GLF_FUZZED((false ? (115971u != 109161u) : (bvec4(false, true, true, false) == bvec4(true, false, true, true))));
      vec2 donor_replacementGLF_dead17uv = _GLF_FUZZED(GLF_dead5resolution);
      if(! donor_replacementGLF_dead17c1 && ! donor_replacementGLF_dead17c2 && donor_replacementGLF_dead17c3)
       {
        float GLF_dead17stripe = GLF_dead17compute_stripe(cos((donor_replacementGLF_dead17uv.x + donor_replacementGLF_dead17uv.y) * 20.0));
        sum = mix(vec3(.7, sinh(donor_replacementGLF_dead17uv.x), donor_replacementGLF_dead17uv.x), vec3(.3, .5, donor_replacementGLF_dead17uv.x), GLF_dead17stripe);
        GLF_dead17_GLF_color = vec4(sum, 1.0);
        return;
       }
     }
    vec3 GLF_dead8sum = vec3(0.0);
    if(_GLF_DEAD(false))
     {
      float donor_replacementGLF_dead14data[10] = _GLF_FUZZED(float[10](GLF_dead11one, GLF_dead11one, GLF_dead11one, -95.04, dot(inversesqrt(vec3(5.9, -3.3, -7.0)), GLF_dead7polynomial), 41.11, GLF_dead11one, GLF_dead11one, 9137.8831, -5.8));
      int donor_replacementGLF_dead14msb9 = _GLF_FUZZED(mix(-1100, 26514, true));
      {
       GLF_dead14_GLF_color = vec4(donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(1), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 10)] / 10.0, donor_replacementGLF_dead14data[_GLF_MAKE_IN_BOUNDS_INT(findMSB(donor_replacementGLF_dead14msb9), 10)] / 10.0, 1.0);
      }
     }
    for(int GLF_dead8i = 0; GLF_dead8i < 16; GLF_dead8i ++)
     {
      GLF_dead8sum += GLF_dead8data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead8i, _GLF_IDENTITY(16, (false ? _GLF_FUZZED(69166) : 16)))];
     }
    GLF_dead8sum /= vec3(16.0);
    GLF_dead8_GLF_color = vec4(GLF_dead8sum, 1.0);
   }
  }
 sum /= vec3(16.0);
 _GLF_IDENTITY(_GLF_color = vec4(sum, _GLF_IDENTITY(1.0, (1.0) * 1.0)), (_GLF_color = vec4(sum, 1.0)) / vec4(1.0, 1.0, 1.0, 1.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   float donor_replacementGLF_dead5A[50] = _GLF_FUZZED(float[50](-3.5, sum.z, 33.06, 3150.6538, acos(16.93), dot(_GLF_color, _GLF_color), 3.0, 21.15, 3662.2578, 58.75, 7510.5912, -1030.4910, -0.9, 75.55, 8.0, -94.83, 28.78, 7564.2702, -1.1, _GLF_IDENTITY(-1757.6352, min(_GLF_IDENTITY(-1757.6352, max(-1757.6352, -1757.6352)), -1757.6352)), -94.83, 75.55, 33.06, 3662.2578, 28.78, -0.9, sum.z, 3150.6538, 58.75, 8.0, -3.5, 21.15, 7510.5912, acos(16.93), 7564.2702, -1.1, -1757.6352, _GLF_IDENTITY(_GLF_IDENTITY(3.0, min(3.0, _GLF_IDENTITY(3.0, (3.0) / 1.0))), (_GLF_IDENTITY(3.0, clamp(3.0, _GLF_IDENTITY(3.0, (_GLF_IDENTITY(3.0, (3.0) / 1.0)) - 0.0), 3.0))) + 0.0), -1030.4910, dot(_GLF_color, _GLF_color), 3.0, _GLF_IDENTITY(28.78, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(-9.6) : _GLF_IDENTITY(28.78, mix(float(_GLF_IDENTITY(28.78, (false ? _GLF_FUZZED(99.27) : 28.78))), float(_GLF_FUZZED(-2628.2925)), bool(false))))), -94.83, 58.75, -3.5, 7510.5912, 7564.2702, acos(16.93), 21.15, 33.06));
   vec2 donor_replacementGLF_dead5c = _GLF_FUZZED(GLF_dead0resolution);
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead14a = _GLF_FUZZED(6381.9680);
     float donor_replacementGLF_dead14b = _GLF_FUZZED(-1945.4011);
     {
      GLF_dead14gl_FragCoord.y < GLF_dead14resolution.y / 2.0 ? donor_replacementGLF_dead14a > donor_replacementGLF_dead14b : donor_replacementGLF_dead14a < donor_replacementGLF_dead14b;
     }
    }
   vec3 donor_replacementGLF_dead5col = _GLF_FUZZED(vec3(7.2, -3.3, 9.0));
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead7x = _GLF_FUZZED(length((clamp(vec3(6029.6483, -856.728, -3308.0690), vec3(3.2, -83.64, -6.5), donor_replacementGLF_dead5col) * donor_replacementGLF_dead5col)));
     {
      if(_GLF_DEAD(false))
       {
        {
         1;
        }
       }
      GLF_dead7polynomial.x * pow(donor_replacementGLF_dead7x, 2.0) + GLF_dead7polynomial.y * donor_replacementGLF_dead7x + GLF_dead7polynomial.z;
     }
    }
   {
    donor_replacementGLF_dead5col = .5 + cos(donor_replacementGLF_dead5c.y + vec3(GLF_dead5resolution.x, donor_replacementGLF_dead5A[4] / GLF_dead5resolution.x + 50.0, 22.0));
   }
  }
 if(_GLF_DEAD(false))
  {
   float donor_replacementGLF_dead15data[10] = _GLF_FUZZED(float[10](GLF_dead11one, float(56693u), GLF_dead11one, -7910.0757, GLF_dead11one, 41.34, GLF_dead11one, GLF_dead3resolution.rr[0], 6608.2530, 6608.2530));
   int donor_replacementGLF_dead15i = _GLF_FUZZED(int(false));
   int donor_replacementGLF_dead15j = _GLF_FUZZED(bitfieldInsert(30319, -39346, 19494, -90703));
   {
    float GLF_dead15temp = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15i, 10)];
    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15i, 10)] = donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15j, 10)];
    donor_replacementGLF_dead15data[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead15j, 10)] = GLF_dead15temp;
   }
  }
}
