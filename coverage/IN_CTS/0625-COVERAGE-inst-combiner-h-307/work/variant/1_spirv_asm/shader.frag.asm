; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 69
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %49
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "p"
               OpName %11 "buf1"
               OpMemberName %11 0 "resolution"
               OpName %13 ""
               OpName %37 "buf0"
               OpMemberName %37 0 "_GLF_uniform_int_values"
               OpName %39 ""
               OpName %49 "_GLF_color"
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 1
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 0
               OpDecorate %49 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeFloat 32
         %11 = OpTypeStruct %10
         %12 = OpTypePointer Uniform %11
         %13 = OpVariable %12 Uniform
         %14 = OpConstant %6 0
         %15 = OpTypePointer Uniform %10
         %20 = OpConstant %6 1
         %21 = OpConstantComposite %7 %20 %20
         %23 = OpTypeInt 32 0
         %24 = OpConstant %23 1
         %25 = OpTypePointer Function %6
         %28 = OpConstant %23 0
         %35 = OpConstant %23 3
         %36 = OpTypeArray %6 %35
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %40 = OpTypePointer Uniform %6
         %43 = OpTypeBool
         %47 = OpTypeVector %10 4
         %48 = OpTypePointer Output %47
         %49 = OpVariable %48 Output
         %53 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %16 = OpAccessChain %15 %13 %14
         %17 = OpLoad %10 %16
         %18 = OpConvertFToS %6 %17
         %19 = OpCompositeConstruct %7 %18 %18
         %22 = OpShiftRightArithmetic %7 %19 %21
               OpStore %9 %22
         %26 = OpAccessChain %25 %9 %24
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %25 %9 %28
         %30 = OpLoad %6 %29
         %31 = OpIAdd %6 %30 %27
         %32 = OpAccessChain %25 %9 %28
               OpStore %32 %31
         %33 = OpAccessChain %25 %9 %28
         %34 = OpLoad %6 %33
         %41 = OpAccessChain %40 %39 %14 %14
         %42 = OpLoad %6 %41
         %44 = OpIEqual %43 %34 %42
               OpSelectionMerge %46 None
               OpBranchConditional %44 %45 %64
         %45 = OpLabel
         %50 = OpAccessChain %40 %39 %14 %20
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %10 %51
         %54 = OpAccessChain %40 %39 %14 %53
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %10 %55
         %57 = OpAccessChain %40 %39 %14 %53
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %10 %58
         %60 = OpAccessChain %40 %39 %14 %20
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %10 %61
         %63 = OpCompositeConstruct %47 %52 %56 %59 %62
               OpStore %49 %63
               OpBranch %46
         %64 = OpLabel
         %65 = OpAccessChain %40 %39 %14 %53
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %10 %66
         %68 = OpCompositeConstruct %47 %67 %67 %67 %67
               OpStore %49 %68
               OpBranch %46
         %46 = OpLabel
               OpReturn
               OpFunctionEnd
