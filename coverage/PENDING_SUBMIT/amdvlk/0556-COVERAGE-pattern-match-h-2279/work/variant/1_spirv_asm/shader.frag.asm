; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 66
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %47
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %47 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %47 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %32 = OpTypeBool
         %44 = OpTypeFloat 32
         %45 = OpTypeVector %44 4
         %46 = OpTypePointer Output %45
         %47 = OpVariable %46 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %21 = OpAccessChain %17 %14 %15 %16
         %22 = OpLoad %6 %21
               OpStore %20 %22
               OpBranch %23
         %23 = OpLabel
               OpLoopMerge %25 %26 None
               OpBranch %27
         %27 = OpLabel
         %28 = OpAccessChain %17 %14 %15 %15
         %29 = OpLoad %6 %28
         %30 = OpLoad %6 %20
         %31 = OpBitwiseOr %6 %29 %30
         %33 = OpSLessThan %32 %31 %16
               OpBranchConditional %33 %24 %25
         %24 = OpLabel
         %34 = OpLoad %6 %8
         %35 = OpIAdd %6 %34 %16
               OpStore %8 %35
               OpBranch %26
         %26 = OpLabel
         %36 = OpLoad %6 %20
         %37 = OpIAdd %6 %36 %16
               OpStore %20 %37
               OpBranch %23
         %25 = OpLabel
         %38 = OpLoad %6 %8
         %39 = OpAccessChain %17 %14 %15 %16
         %40 = OpLoad %6 %39
         %41 = OpIEqual %32 %38 %40
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %61
         %42 = OpLabel
         %48 = OpAccessChain %17 %14 %15 %15
         %49 = OpLoad %6 %48
         %50 = OpConvertSToF %44 %49
         %51 = OpAccessChain %17 %14 %15 %16
         %52 = OpLoad %6 %51
         %53 = OpConvertSToF %44 %52
         %54 = OpAccessChain %17 %14 %15 %16
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %44 %55
         %57 = OpAccessChain %17 %14 %15 %15
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %44 %58
         %60 = OpCompositeConstruct %45 %50 %53 %56 %59
               OpStore %47 %60
               OpBranch %43
         %61 = OpLabel
         %62 = OpAccessChain %17 %14 %15 %16
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %44 %63
         %65 = OpCompositeConstruct %45 %64 %64 %64 %64
               OpStore %47 %65
               OpBranch %43
         %43 = OpLabel
               OpReturn
               OpFunctionEnd
