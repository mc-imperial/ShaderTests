; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 82
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %37
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "x"
               OpName %12 "gl_FragCoord"
               OpName %19 "a"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %37 "_GLF_color"
               OpName %78 "indexable"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %37 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 0
         %15 = OpTypePointer Input %9
         %21 = OpConstant %13 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpConstant %6 0
         %27 = OpTypePointer Uniform %6
         %36 = OpTypePointer Output %10
         %37 = OpVariable %36 Output
         %41 = OpConstant %6 1
         %73 = OpConstant %13 4
         %74 = OpTypeArray %10 %73
         %77 = OpTypePointer Function %74
         %79 = OpTypePointer Function %10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpVariable %7 Function
         %78 = OpVariable %77 Function
         %16 = OpAccessChain %15 %12 %14
         %17 = OpLoad %9 %16
         %18 = OpConvertFToS %6 %17
               OpStore %8 %18
         %20 = OpLoad %6 %8
         %28 = OpAccessChain %27 %25 %26 %26
         %29 = OpLoad %6 %28
         %30 = OpBitwiseAnd %6 %20 %29
         %31 = OpLoad %6 %8
         %32 = OpAccessChain %27 %25 %26 %26
         %33 = OpLoad %6 %32
         %34 = OpBitwiseAnd %6 %31 %33
         %35 = OpBitwiseOr %6 %30 %34
               OpStore %19 %35
         %38 = OpAccessChain %27 %25 %26 %26
         %39 = OpLoad %6 %38
         %40 = OpConvertSToF %9 %39
         %42 = OpAccessChain %27 %25 %26 %41
         %43 = OpLoad %6 %42
         %44 = OpConvertSToF %9 %43
         %45 = OpAccessChain %27 %25 %26 %41
         %46 = OpLoad %6 %45
         %47 = OpConvertSToF %9 %46
         %48 = OpAccessChain %27 %25 %26 %26
         %49 = OpLoad %6 %48
         %50 = OpConvertSToF %9 %49
         %51 = OpCompositeConstruct %10 %40 %44 %47 %50
         %52 = OpAccessChain %27 %25 %26 %26
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %9 %53
         %55 = OpAccessChain %27 %25 %26 %41
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %9 %56
         %58 = OpAccessChain %27 %25 %26 %41
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %9 %59
         %61 = OpAccessChain %27 %25 %26 %26
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %9 %62
         %64 = OpCompositeConstruct %10 %54 %57 %60 %63
         %65 = OpAccessChain %27 %25 %26 %41
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %9 %66
         %68 = OpCompositeConstruct %10 %67 %67 %67 %67
         %69 = OpAccessChain %27 %25 %26 %41
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %9 %70
         %72 = OpCompositeConstruct %10 %71 %71 %71 %71
         %75 = OpCompositeConstruct %74 %51 %64 %68 %72
         %76 = OpLoad %6 %19
               OpStore %78 %75
         %80 = OpAccessChain %79 %78 %76
         %81 = OpLoad %10 %80
               OpStore %37 %81
               OpReturn
               OpFunctionEnd
