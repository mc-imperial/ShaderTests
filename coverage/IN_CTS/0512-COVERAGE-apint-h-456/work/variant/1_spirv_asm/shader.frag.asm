; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 64
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %38
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %38 "_GLF_color"
               OpName %42 "buf0"
               OpMemberName %42 0 "_GLF_uniform_int_values"
               OpName %44 ""
               OpDecorate %38 Location 0
               OpDecorate %41 ArrayStride 16
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %16 = OpConstant %6 100
         %17 = OpTypeBool
         %20 = OpConstant %6 1
         %25 = OpConstant %6 10
         %31 = OpConstant %6 4
         %35 = OpTypeFloat 32
         %36 = OpTypeVector %35 4
         %37 = OpTypePointer Output %36
         %38 = OpVariable %37 Output
         %39 = OpTypeInt 32 0
         %40 = OpConstant %39 2
         %41 = OpTypeArray %6 %40
         %42 = OpTypeStruct %41
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %14
         %14 = OpLabel
         %15 = OpLoad %6 %8
         %18 = OpSLessThan %17 %15 %16
               OpBranchConditional %18 %11 %12
         %11 = OpLabel
         %19 = OpLoad %6 %8
         %21 = OpIAdd %6 %19 %20
               OpStore %8 %21
         %22 = OpLoad %6 %8
         %23 = OpLoad %6 %8
         %24 = OpIMul %6 %22 %23
         %26 = OpSGreaterThan %17 %24 %25
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
               OpBranch %12
         %28 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpBranch %10
         %12 = OpLabel
         %30 = OpLoad %6 %8
         %32 = OpIEqual %17 %30 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %59
         %33 = OpLabel
         %46 = OpAccessChain %45 %44 %9 %9
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %35 %47
         %49 = OpAccessChain %45 %44 %9 %20
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %35 %50
         %52 = OpAccessChain %45 %44 %9 %20
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %35 %53
         %55 = OpAccessChain %45 %44 %9 %9
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %35 %56
         %58 = OpCompositeConstruct %36 %48 %51 %54 %57
               OpStore %38 %58
               OpBranch %34
         %59 = OpLabel
         %60 = OpAccessChain %45 %44 %9 %20
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %35 %61
         %63 = OpCompositeConstruct %36 %62 %62 %62 %62
               OpStore %38 %63
               OpBranch %34
         %34 = OpLabel
               OpReturn
               OpFunctionEnd
