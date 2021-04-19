; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 85
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %61 "_GLF_color"
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpConstant %6 0
         %12 = OpConstant %6 1
         %19 = OpConstant %6 100
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypePointer Uniform %6
         %30 = OpTypeBool
         %58 = OpTypeFloat 32
         %59 = OpTypeVector %58 4
         %60 = OpTypePointer Output %59
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpBranch %13
         %13 = OpLabel
         %80 = OpPhi %6 %9 %5 %33 %14
         %27 = OpAccessChain %26 %25 %9 %12
         %28 = OpLoad %6 %27
         %29 = OpISub %6 %19 %28
         %31 = OpSLessThan %30 %80 %29
               OpLoopMerge %15 %14 None
               OpBranchConditional %31 %14 %15
         %14 = OpLabel
         %33 = OpIAdd %6 %80 %12
               OpBranch %13
         %15 = OpLabel
         %34 = OpAccessChain %26 %25 %9 %9
         %35 = OpLoad %6 %34
         %36 = OpIEqual %30 %35 %9
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %38
         %37 = OpLabel
               OpBranch %39
         %39 = OpLabel
         %84 = OpPhi %6 %12 %37 %51 %40
         %81 = OpPhi %6 %80 %37 %47 %40
         %45 = OpSLessThan %30 %81 %19
               OpLoopMerge %41 %40 None
               OpBranchConditional %45 %40 %41
         %40 = OpLabel
         %47 = OpIAdd %6 %81 %12
         %49 = OpISub %6 %12 %84
         %51 = OpIMul %6 %84 %49
               OpBranch %39
         %41 = OpLabel
               OpBranch %38
         %38 = OpLabel
         %82 = OpPhi %6 %12 %15 %84 %41
         %55 = OpIEqual %30 %82 %35
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %75
         %56 = OpLabel
         %64 = OpConvertSToF %58 %28
         %67 = OpConvertSToF %58 %35
         %74 = OpCompositeConstruct %59 %64 %67 %67 %64
               OpStore %61 %74
               OpBranch %57
         %75 = OpLabel
         %78 = OpConvertSToF %58 %35
         %79 = OpCompositeConstruct %59 %78 %78 %78 %78
               OpStore %61 %79
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
