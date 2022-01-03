; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 70
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %22 "i"
               OpName %51 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %51 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 -25236
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 4
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpConstant %6 3
         %18 = OpTypePointer Uniform %6
         %23 = OpConstant %6 2
         %34 = OpTypeBool
         %37 = OpConstant %6 1
         %48 = OpTypeFloat 32
         %49 = OpTypeVector %48 4
         %50 = OpTypePointer Output %49
         %51 = OpVariable %50 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %7 Function
         %19 = OpAccessChain %18 %15 %16 %17
         %20 = OpLoad %6 %19
         %21 = OpBitwiseOr %6 %9 %20
               OpStore %8 %21
         %24 = OpAccessChain %18 %15 %16 %23
         %25 = OpLoad %6 %24
               OpStore %22 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %6 %22
         %32 = OpAccessChain %18 %15 %16 %16
         %33 = OpLoad %6 %32
         %35 = OpSLessThan %34 %31 %33
               OpBranchConditional %35 %27 %28
         %27 = OpLabel
         %36 = OpLoad %6 %8
         %38 = OpIAdd %6 %36 %37
               OpStore %8 %38
               OpBranch %29
         %29 = OpLabel
         %39 = OpLoad %6 %22
         %40 = OpIAdd %6 %39 %37
               OpStore %22 %40
               OpBranch %26
         %28 = OpLabel
         %41 = OpLoad %6 %8
         %42 = OpAccessChain %18 %15 %16 %37
         %43 = OpLoad %6 %42
         %44 = OpSNegate %6 %43
         %45 = OpIEqual %34 %41 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %65
         %46 = OpLabel
         %52 = OpAccessChain %18 %15 %16 %17
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %48 %53
         %55 = OpAccessChain %18 %15 %16 %23
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %48 %56
         %58 = OpAccessChain %18 %15 %16 %23
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %48 %59
         %61 = OpAccessChain %18 %15 %16 %17
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %48 %62
         %64 = OpCompositeConstruct %49 %54 %57 %60 %63
               OpStore %51 %64
               OpBranch %47
         %65 = OpLabel
         %66 = OpAccessChain %18 %15 %16 %23
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %48 %67
         %69 = OpCompositeConstruct %49 %68 %68 %68 %68
               OpStore %51 %69
               OpBranch %47
         %47 = OpLabel
               OpReturn
               OpFunctionEnd
