; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 68
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %24
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %24 "gl_FragCoord"
               OpName %30 "buf1"
               OpMemberName %30 0 "_GLF_uniform_float_values"
               OpName %32 ""
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %24 BuiltIn FragCoord
               OpDecorate %29 ArrayStride 16
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 1
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %23 = OpTypePointer Input %7
         %24 = OpVariable %23 Input
         %25 = OpConstant %11 0
         %26 = OpTypePointer Input %6
         %29 = OpTypeArray %6 %12
         %30 = OpTypeStruct %29
         %31 = OpTypePointer Uniform %30
         %32 = OpVariable %31 Uniform
         %33 = OpTypePointer Uniform %6
         %36 = OpTypeBool
         %43 = OpConstant %6 0
         %57 = OpConstant %6 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21 %21
               OpStore %9 %22
         %27 = OpAccessChain %26 %24 %25
         %28 = OpLoad %6 %27
         %34 = OpAccessChain %33 %32 %17 %17
         %35 = OpLoad %6 %34
         %37 = OpFOrdLessThan %36 %28 %35
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %40
         %38 = OpLabel
               OpBranch %39
         %40 = OpLabel
         %41 = OpAccessChain %26 %24 %12
         %42 = OpLoad %6 %41
         %44 = OpFOrdLessThan %36 %42 %43
               OpSelectionMerge %46 None
               OpBranchConditional %44 %45 %47
         %45 = OpLabel
               OpBranch %46
         %47 = OpLabel
         %48 = OpAccessChain %26 %24 %25
         %49 = OpLoad %6 %48
         %50 = OpFOrdGreaterThanEqual %36 %49 %43
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %52
         %51 = OpLabel
               OpBranch %53
         %53 = OpLabel
               OpLoopMerge %55 %56 None
               OpBranch %54
         %54 = OpLabel
         %58 = OpAccessChain %18 %16 %17 %17
         %59 = OpLoad %10 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpAccessChain %18 %16 %17 %17
         %62 = OpLoad %10 %61
         %63 = OpConvertSToF %6 %62
         %64 = OpCompositeConstruct %7 %57 %60 %63 %57
               OpStore %9 %64
               OpBranch %56
         %56 = OpLabel
         %65 = OpAccessChain %26 %24 %12
         %66 = OpLoad %6 %65
         %67 = OpFOrdLessThan %36 %66 %43
               OpBranchConditional %67 %53 %55
         %55 = OpLabel
               OpBranch %52
         %52 = OpLabel
               OpBranch %46
         %46 = OpLabel
               OpBranch %39
         %39 = OpLabel
               OpReturn
               OpFunctionEnd
