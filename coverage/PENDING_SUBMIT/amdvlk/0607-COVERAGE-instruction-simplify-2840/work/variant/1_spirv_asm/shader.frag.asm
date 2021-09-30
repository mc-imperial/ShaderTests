; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 69
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %33
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %33 "_GLF_color"
               OpName %65 "indexable"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %33 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 2
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpTypePointer Uniform %6
         %23 = OpConstant %6 -2147483648
         %24 = OpTypeBool
         %30 = OpTypeFloat 32
         %31 = OpTypeVector %30 4
         %32 = OpTypePointer Output %31
         %33 = OpVariable %32 Output
         %34 = OpConstant %6 1
         %60 = OpConstant %12 4
         %61 = OpTypeArray %31 %60
         %64 = OpTypePointer Function %61
         %66 = OpTypePointer Function %31
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %65 = OpVariable %64 Function
         %35 = OpAccessChain %19 %17 %18 %34
         %36 = OpLoad %6 %35
         %37 = OpConvertSToF %30 %36
         %38 = OpCompositeConstruct %31 %37 %37 %37 %37
         %39 = OpAccessChain %19 %17 %18 %18
         %40 = OpLoad %6 %39
         %41 = OpConvertSToF %30 %40
         %42 = OpAccessChain %19 %17 %18 %34
         %43 = OpLoad %6 %42
         %44 = OpConvertSToF %30 %43
         %45 = OpAccessChain %19 %17 %18 %34
         %46 = OpLoad %6 %45
         %47 = OpConvertSToF %30 %46
         %48 = OpAccessChain %19 %17 %18 %18
         %49 = OpLoad %6 %48
         %50 = OpConvertSToF %30 %49
         %51 = OpCompositeConstruct %31 %41 %44 %47 %50
         %52 = OpAccessChain %19 %17 %18 %34
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %30 %53
         %55 = OpCompositeConstruct %31 %54 %54 %54 %54
         %56 = OpAccessChain %19 %17 %18 %34
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %30 %57
         %59 = OpCompositeConstruct %31 %58 %58 %58 %58
         %62 = OpCompositeConstruct %61 %38 %51 %55 %59
         %63 = OpFunctionCall %6 %8
               OpStore %65 %62
         %67 = OpAccessChain %66 %65 %63
         %68 = OpLoad %31 %67
               OpStore %33 %68
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %20 = OpAccessChain %19 %17 %18 %18
         %21 = OpLoad %6 %20
               OpStore %11 %21
         %22 = OpLoad %6 %11
         %25 = OpSLessThan %24 %22 %23
         %26 = OpAccessChain %19 %17 %18 %18
         %27 = OpLoad %6 %26
               OpReturnValue %27
               OpFunctionEnd
